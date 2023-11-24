import GameReferee from "../domain/GameReferee.js";
import InputView from "../inputView.js";
import OutputView from "../OutputView.js";
import { randomGenerator } from "../utils/RandomGenerator.js";

class Controller {
  gameReferee;
  randomNumber;

  constructor() {
    this.randomNumber = randomGenerator();
  }

  async start() {
    OutputView.prolog();
    await this.getNumber();
  }

  async getNumber() {
    /*const a = await InputView.getNumber();*/
    const gameReferee = new GameReferee(await InputView.getNumber(), this.randomNumber);
    OutputView.printResult(gameReferee.strikeNumber(), gameReferee.ballNumber(), gameReferee.isNothing());

    if (gameReferee.strikeNumber() === 3) {
      OutputView.strikeOut();
      await this.getRestartNumber();
    } else {
      await this.getNumber();
    }
  }

  async getRestartNumber() {
    const choiceNumber = await InputView.getRestartChoice();

    if (choiceNumber === '1') {
      this.randomNumber = randomGenerator();
      await this.getNumber();
    }

    if (choiceNumber === '2') {
      return;
    }

  }
}

export default Controller;