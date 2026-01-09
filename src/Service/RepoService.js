export default class RepoService {
  #repo;

  constructor({ repo }) {
    this.#repo = repo;
  }

  getAll() {
    return this.#repo;
  }
}
