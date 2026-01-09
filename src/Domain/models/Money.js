import Validator from '../../Util/Validator.js';

export default class Money {
  static #UNIT = 1000;
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = Number(amount);
  }

  #validate(amount) {
    const numericAmount = Number(amount);

    Validator.isNumber(amount);
    Validator.isPositive(amount);

    if (numericAmount <= 0) {
      throw new Error('구입 금액은 0보다 커야 합니다.');
    }
    if (numericAmount % Money.#UNIT !== 0) {
      throw new Error(`구입 금액은 ${Money.#UNIT}원 단위여야 합니다.`);
    }
  }

  getCount() {
    return this.#amount / Money.#UNIT;
  }

  getAmount() {
    return this.#amount;
  }
}
