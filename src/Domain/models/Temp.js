import Validator from '../../Util/Validator.js';

export default class Money {
  static RULE = Object.freeze({
    UNIT: 1000,
    MIN_AMOUNT: 1000, // 최소 구입 금액 설정 가능
  });

  static ERROR = Object.freeze({
    INVALID_NUMBER: '구입 금액은 숫자여야 합니다.',
    INVALID_UNIT: `구입 금액은 ${Money.RULE.UNIT}원 단위여야 합니다.`,
    INVALID_MIN_AMOUNT: `최소 구입 금액은 ${Money.RULE.MIN_AMOUNT}원입니다.`,
  });

  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = Number(amount);
  }

  #validate(amount) {
    // 1. 공용 유틸로 기술적 검사 (숫자인지, 정수인지 등)
    Validator.isNumber(amount);
    Validator.isInteger(amount);

    const numericAmount = Number(amount);

    // 2. 도메인 전용 규칙 검사
    if (numericAmount < Money.RULE.MIN_AMOUNT) {
      throw new Error(Money.ERROR.INVALID_MIN_AMOUNT);
    }
    if (numericAmount % Money.RULE.UNIT !== 0) {
      throw new Error(Money.ERROR.INVALID_UNIT);
    }
  }

  getCount() {
    return this.#amount / Money.RULE.UNIT;
  }

  getAmount() {
    return this.#amount;
  }
}
