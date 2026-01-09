export default class RepeatController {
  static ERROR_MESSAGES = Object.freeze({
    INVALID_MENU: `메뉴 번호는 1~4번 또는 Q만 입력 가능합니다.`,
    SYSTEM_FAILURE: `알 수 없는 시스템 오류가 발생했습니다.`,
  });

  #inputView;
  #outputView;
  #service;

  constructor({ inputView, outputView, service }) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#service = service;
  }

  // 1. 프로그램 메인 실행부
  async run() {
    try {
      await this.#menuLoop();
    } catch (error) {
      this.#outputView.printError(error);
    }
  }

  // 2. 메뉴 반복 루프 (Q 입력 시 종료)
  async #menuLoop() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const today = new Date('2024-12-14'); // 또는 DateTimes.now() 활용
      this.#outputView.printInfo(today);

      const command = await this.#inputView.readAmount();

      if (command.toUpperCase() === 'Q') break;

      await this.#execute(command, today);
    }
  }

  // 3. 명령어 분기 처리
  async #execute(command, today) {
    const formattedToday = this.#formatDate(today);

    const menuActions = {
      1: () => this.#handleProcessA(formattedToday),
      2: () => this.#handleProcessB(formattedToday),
      3: () => this.#handleProcessC(formattedToday),
      4: () => this.#handleProcessD(formattedToday),
    };

    const action = menuActions[command];

    if (action) {
      return action();
    }

    throw new Error(RepeatController.ERROR_MESSAGES.INVALID_MENU);
  }

  async #handleProcessA(today) {
    console.log(today, '프로세스A진행');
    const number = await this.#inputView.readAmount();
    this.#outputView.printSomething(number);
  }

  async #handleProcessB() {
    return 'B';
  }

  async #handleProcessC() {
    return 'C';
  }

  async #handleProcessD() {
    return 'D';
  }

  // --- 공통 유틸리티 메서드 ---

  #formatDate(date) {
    return date.toISOString().split('T')[0];
  }
}
