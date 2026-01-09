export default class Policy {
  static RULE = Object.freeze({
    MONDAY_START: { hour: 13, minute: 0 },
    OTHER_START: { hour: 10, minute: 0 },
    CAMPUS: { OPEN: 8, CLOSE: 23 },
    THRESHOLD: { ATTENDANCE: 5, LATE: 30 },
  });

  static ERROR = Object.freeze({
    OUT_OF_CAMPUS_HOUR: '[ERROR] 캠퍼스 운영 시간에만 출석이 가능합니다.',
  });

  static calculateStatus(date, time) {
    this.#validateCampusHour(time);

    const standard = this.#getStandardTime(date);
    const [h, m] = time.split(':').map(Number);
    const diff = h * 60 + m - (standard.hour * 60 + standard.minute);

    if (diff <= this.RULE.THRESHOLD.ATTENDANCE) return '출석';
    if (diff <= this.RULE.THRESHOLD.LATE) return '지각';
    return '결석';
  }

  static #getStandardTime(date) {
    const day = new Date(date).getDay();
    return day === 1 ? this.RULE.MONDAY_START : this.RULE.OTHER_START;
  }

  static #validateCampusHour(time) {
    const [hour] = time.split(':').map(Number);
    if (hour < this.RULE.CAMPUS.OPEN || hour >= this.RULE.CAMPUS.CLOSE) {
      throw new Error(this.ERROR.OUT_OF_CAMPUS_HOUR);
    }
  }
}
