import LadderFactory from "../domain/LadderFactory.js";
import LadderCalculator from "../domain/LadderCalculator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { goodsShuffling } from "../utils/RandomGenerator.js";
import { playersValidator } from "../utils/Validator.js";

class LadderController {
  players;
  goodsArray;
  height;

  ladderFactory;
  ladderCalculator;

  async start() {
    OutputView.printProlog();
    await this.getPlayers();
    await this.getGoodsNumber();
    await this.getLadderHeight();

    this.ladderFactory = new LadderFactory(this.players.length, this.height);
    this.ladderCalculator = new LadderCalculator(this.ladderFactory.getBodyCoordinate());
    OutputView.printLadder(this.ladderFactory.getHeadLog(this.players), this.ladderFactory.getBodyLog(), this.ladderFactory.getTailLog(this.goodsArray));

    await this.enter();
  }

  async enter() {
    const playerIndex = await this.getChoice();

    if (playerIndex !== -1) {
      const roadArray = this.ladderCalculator.getRoad(playerIndex);
      const resultIndex = this.ladderCalculator.getResultIndex(playerIndex);
      this.showSingleResult(roadArray, resultIndex);  
    }
    if (playerIndex === -1) {
      return this.showAllResult();
    }
    
    return await this.enter();
  }

  async getPlayers() {
    try {
      const playersArray = await InputView.readPlayers();
      playersValidator(playersArray);
      this.players = playersArray;
      OutputView.printBlank();

    } catch (error) {
      OutputView.printError(error);
      return await this.getPlayers();
    }
  }

  async getGoodsNumber() {
    try {
      const goodsNumber = await InputView.readGoodsNumber();
      const success = Array.from({ length : goodsNumber }, () => 1);
      const fail = Array.from({ length : this.players.length - goodsNumber}, () => 0);
      const beforeGoodsArray = success.concat(fail);
      this.goodsArray = goodsShuffling(beforeGoodsArray); 
      OutputView.printBlank();
    } catch (error) {
      OutputView.printError(error);
      return await this.getGoodsNumber();
    }
  }

  async getLadderHeight() {
    try {
      this.height = await InputView.readLadderHeight();
      OutputView.printBlank();
    } catch (error) {
      OutputView.printError(error);
      return await this.getLadderHeight();
    }
  }

  async getChoice() {
    try {
      const choice = await InputView.readChoice();
      if (choice === 'A') {
        return -1;
      }
      return this.players.indexOf(choice);
    } catch (error) {
      OutputView.printError(error);
      return await this.getChoice();
    }
  }

  showSingleResult(roadArray, resultIndex) {
    if (this.goodsArray[resultIndex] === 1) {
      OutputView.printSingleResult(roadArray, '당첨');
    }

    if (this.goodsArray[resultIndex] === 0) {
      OutputView.printSingleResult(roadArray, '꽝');
    }
  }

  showAllResult() {
    const indexArray = Array.from({ length : this.players.length }, (_, index) => index);
    const resultArray = indexArray.map((playerIndex) => this.ladderCalculator.getResultIndex(playerIndex));
    const filtedResultArray = resultArray.map((resultIndex) => {
      if (this.goodsArray[resultIndex] === 1) {
        return '당첨';
      }
      if (this.goodsArray[resultIndex] === 0) {
        return '꽝';
      }
    });
    OutputView.printAllResult(this.players, filtedResultArray);
  }

}

export default LadderController;

const ladderController = new LadderController();
ladderController.start();