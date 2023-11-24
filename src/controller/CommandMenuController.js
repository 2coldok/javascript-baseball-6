import { randomCategory } from "../utils/RandomGenerator.js";
import Supervisor from "../domain/Supervisor.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class CommandMenuController {
  supervisor;

  coachsNumber;


  constructor() {
    this.supervisor = new Supervisor();
  }

  async startCommand() {
    OutputView.printStartProlog();
    await this.setCoachs();

    for (let i = 0; i < this.coachsNumber; i++) {
      await this.setHateMenus(i);
    }
    
    this.showResult();
  }

  async setCoachs() {
    try {
      const names = await InputView.getCoahsNames();
      this.supervisor.uploadNames(names);
      this.coachsNumber = names.split(',').length;
      OutputView.printBlank();
    } catch (error) {
      OutputView.printErrorMesseage(error);
      await this.setCoachs();
    }
  }

  async setHateMenus(index) {
    try {
      const menus = await InputView.getHateMenus(this.supervisor.getName(index))
      this.supervisor.uploadHateMenus(index, menus);
      OutputView.printBlank();
    } catch (error) {
      OutputView.printErrorMesseage(error);
      await this.setHateMenus(index);
    }
  }

  showResult() {
    const categoryNumberArray = randomCategory();
    const result = this.supervisor.getRecommandMenus(categoryNumberArray).map((element, index) => {
      return [this.supervisor.getName(index), ...element];
    });
    OutputView.printCommandMenus(categoryNumberArray, result);
  }
}

export default CommandMenuController;

const a = new CommandMenuController();
a.startCommand();