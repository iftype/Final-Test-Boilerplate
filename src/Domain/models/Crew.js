export default class Crew {
  static RULE = Object.freeze({
    LATE_TO_ABSENT_RATIO: 3,
    EXPULSION: 6, // 5회 초과 시(6회부터) 제적
    INTERVIEW: 3,
    WARNING: 2,
  });

  static ERROR = Object.freeze({
    DUPLICATE_RECORD: '[ERROR] 이미 출석을 확인하였습니다. 필요한 경우 수정 기능을 이용해 주세요.',
  });

  #name;
  #records;

  constructor(name) {
    this.#name = name;
    this.#records = new Map();
  }

  addRecord(record) {
    const date = record.getDate();
    if (this.#records.has(date)) throw new Error(Crew.ERROR.DUPLICATE_RECORD);
    this.#records.set(date, record);
  }

  getStats() {
    const stats = { 출석: 0, 지각: 0, 결석: 0 };
    this.#records.forEach((record) => {
      const status = record.getStatus();
      if (stats[status] !== undefined) stats[status]++;
    });
    return stats;
  }

  calculateTotalAbsenceScore(finalStats) {
    const { 지각, 결석 } = finalStats;
    return 결석 + Math.floor(지각 / Crew.RULE.LATE_TO_ABSENT_RATIO);
  }

  getExpulsionStatus(score) {
    if (score >= Crew.RULE.EXPULSION) return '제적';
    if (score >= Crew.RULE.INTERVIEW) return '면담';
    if (score >= Crew.RULE.WARNING) return '경고';
    return '정상';
  }

  getName() {
    return this.#name;
  }
  getAllRecords() {
    return Array.from(this.#records.values());
  }
  getRecordByDate(date) {
    return this.#records.get(date) || null;
  }
}
