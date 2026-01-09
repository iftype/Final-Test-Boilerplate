import Policy from './Policy.js';

export default class Record {
  #nickname;
  #date;
  #time;
  #status;

  constructor(nickname, date, time) {
    // 필요 시 Validator.isEmpty(nickname) 등 추가
    this.#nickname = nickname;
    this.#date = date;
    this.#time = time;
    this.#status = Policy.calculateStatus(date, time);
  }

  updateTime(newTime) {
    this.#time = newTime;
    this.#status = Policy.calculateStatus(this.#date, newTime);
  }

  getNickname() {
    return this.#nickname;
  }
  getDate() {
    return this.#date;
  }
  getTime() {
    return this.#time;
  }
  getStatus() {
    return this.#status;
  }
}
