import Money from '../domain/models/Money.js';
import Temp from '../domain/models/Temp.js';

export default class TemplateController {
  #inputView;
  #outputView;
  #service;

  constructor({ inputView, outputView, service }) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#service = service;
  }

  async run() {
    // 1. A 입력
    const inputA = await this.#processA();

    // 2. A를 사용한 다른 모델 생성 후 출력
    const getModel = this.#service.serviceA(inputA);
    this.#outputView.printSomething(getModel);

    // 3. B 입력 진행 (입력값이 두개)
    const getModelOther = await this.#processB();

    // 4. 결과 계산 및 출력
    const result = this.#service.serviceB(getModelOther);
    this.#outputView.printResult(result);
  }

  // 입력 A
  async #processA() {
    return this.#handleRetry(async () => {
      const amount = await this.#inputView.readAmount();
      return new Money(amount);
    });
  }

  // 입력 B
  async #processB() {
    // 입력 B-1
    const winningNumbers = await this.#handleRetry(async () => {
      const numbers = await this.#inputView.readB_A();
      return 1;
      return new Temp(numbers);
    });

    // 입력 B-2
    return this.#handleRetry(async () => {
      const bonus = await this.#inputView.readB_B();
      return 2;
      return new Temp(winningNumbers, bonus);
    });
  }

  async #handleRetry(action) {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        return await action();
      } catch (error) {
        this.#outputView.printError(error.message);
      }
    }
  }
}
