import Controller from './controllers/RepeatController.js';
import Repository from './repositories/Repository.js';
import RepoService from './services/RepoService.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

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
