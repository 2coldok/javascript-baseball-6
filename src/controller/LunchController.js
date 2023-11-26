import Supervisor from "../domain/Supervisor.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class LunchController {
  Supervisor;

  coachNumbers;

  constructor() {
    this.Supervisor = new Supervisor();
  }

  async startRecommand() {
    OutputView.printProlog();
    await this.getCoachs();

    for (let i = 0; i < this.coachNumbers; i++) {
      await this.getHateMenus(i);
      OutputView.printBlank();
    }
    this.Supervisor.setMenus();
    this.showResult();
  }

  async getCoachs() {
    try {
      const names = await InputView.getCoach();
      this.Supervisor.setNames(names);
      this.coachNumbers = this.Supervisor.getCoachNumbers();
      OutputView.printBlank();
    } catch(error) {
      OutputView.printError(error);
      await this.getCoachs();
    }
  }

  async getHateMenus(index) {
    try {
      const name = this.Supervisor.getName(index);
      const menus = await InputView.getHateMenus(name);
      this.Supervisor.setHateMenus(index, menus);
    } catch(error) {
      OutputView.printError(error);
      await this.getHateMenus(index);
    }
  }

  showResult() {
    OutputView.printResult(this.Supervisor.getCategoryNumber(), this.Supervisor.getNameWithMenus());
  }
}

export default LunchController;
