import TemplateController from './Controller/TemplateController.js';
import TempService from './Service/TempService.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  async run() {
    const service = new TempService();

    const controller = new TemplateController({
      inputView: InputView,
      outputView: OutputView,
      service,
    });

    await controller.run();
  }
}

export default App;
