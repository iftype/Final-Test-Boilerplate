import Controller from './Controller/RepeatController.js';
import Repository from './Repository/Repository.js';
import RepoService from './Service/RepoService.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class AppRepo {
  async run() {
    const repo = new Repository();
    repo.init();

    const service = new RepoService({ repo });

    const controller = new Controller({
      inputView: InputView,
      outputView: OutputView,
      service,
    });

    await controller.run();
  }
}

export default AppRepo;
