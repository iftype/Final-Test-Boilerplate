import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  static #PREFIX = '[ERROR]';

  static #MESSAGE = Object.freeze({
    INFO: '안녕하세요',
    SOMETHING: (object) => `출력 메세지입니다: ${object}`,
  });

  static printError(error) {
    Console.print(`${this.#PREFIX} ${error.message}\n`);
  }

  static printInfo() {
    Console.print(this.#MESSAGE.INFO);
  }

  static printSomething(object) {
    Console.print(this.#MESSAGE.SOMETHING(object));
  }

  static printResult(result) {
    Console.print(this.#MESSAGE.SOMETHING(result));
  }
}
