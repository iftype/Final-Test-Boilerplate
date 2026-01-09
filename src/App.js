import { InputView } from './View/InputView.js';
import { OutputView } from './View/OutputView.js';
import TemplateController from './Controller/TemplateController.js';
import TempService from './Service/TempService.js';

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
