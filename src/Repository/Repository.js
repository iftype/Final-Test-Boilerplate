import Crew from '../Domain/models/Crew.js';
import Record from '../Domain/models/Record.js';
import { readCSV } from '../Util/fileReader.js';

export default class Repository {
  #crews = new Map();

  init() {
    const rawData = readCSV('attendances.md');
    console.log(rawData);

    rawData.forEach(({ nickname, timestamp }) => {
      const [day, time] = timestamp.split(' ');

      const record = new Record(nickname, day, time);
      if (!this.#crews.has(nickname)) {
        this.#crews.set(nickname, new Crew(nickname));
      }

      this.#crews.get(nickname).addRecord(record);
    });
  }

  findAllCrews() {
    return Array.from(this.#crews.values());
  }

  findByName(name) {
    return this.#crews.get(name) || null;
  }

  saveRecord(nickname, day, time) {
    if (!this.#crews.has(nickname)) {
      this.#crews.set(nickname, new Crew(nickname));
    }
    const newRecord = new Record(nickname, day, time);
    this.#crews.get(nickname).addRecord(newRecord);
  }
}
