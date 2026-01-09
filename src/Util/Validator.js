const Validator = {
  // 내부에서만 사용할 에러 메시지
  MESSAGES: {
    NOT_NUMBER: '숫자여야 합니다.',
    NOT_INTEGER: '정수여야 합니다.',
    EMPTY: '값을 입력해 주세요.',
    NOT_POSITIVE: '양수여야 합니다.',
    DUPLICATE: '중복된 값이 존재합니다.',
  },

  // 1. 숫자 판별
  isNumber(value) {
    if (Number.isNaN(Number(value)) || value === null || typeof value === 'symbol') {
      throw new Error(this.MESSAGES.NOT_NUMBER);
    }
  },

  // 2. 정수 판별
  isInteger(value) {
    if (!Number.isInteger(Number(value))) {
      throw new Error(this.MESSAGES.NOT_INTEGER);
    }
  },

  // 3. 빈 값 판별
  isEmpty(value) {
    if (String(value).trim() === '') {
      throw new Error(this.MESSAGES.EMPTY);
    }
  },

  // 4. 양수 판별
  isPositive(value) {
    if (Number(value) <= 0) {
      throw new Error(this.MESSAGES.NOT_POSITIVE);
    }
  },

  // 5. 배열 내 중복 판별
  isDuplicate(array) {
    if (new Set(array).size !== array.length) {
      throw new Error(this.MESSAGES.DUPLICATE);
    }
  },
};

export default Validator;
