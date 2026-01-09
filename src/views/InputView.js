import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  static #MESSAGE = Object.freeze({
    INPUT_SOMETHING_A: 'A 입력 메세지입니다\n',
    INPUT_SOMETHING_B: 'B 입력 메세지입니다\n',
  });

  static async readAmount() {
    // 내부 정적 필드에 접근할 때는 클래스명을 명시하거나 this를 사용
    const input = await Console.readLineAsync(this.#MESSAGE.INPUT_SOMETHING_A);
    return input;
  }

  static async readB_A() {
    const input = await Console.readLineAsync(this.#MESSAGE.INPUT_SOMETHING_B);
    return input.trim();
  }
}
