import Supervisor from "../domain/Supervisor.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import LadderFactory from "../domain/LadderFactory.js";
import Player from "../domain/Player.js"

// node src/controller/LadderController
class LadderController {
  players;
  supervisor;

  ladderMap;
  coordinate;

  playerResult = [];

  constructor() {
    this.supervisor = new Supervisor();
  }

  async start() {
    OutputView.printProlog();
    const ladderNumber = await this.getPlayers();
    await this.getGoodsNumber();
    const ladderHeight = await this.getLadderHeight();
    
    const ladderFactory = new LadderFactory(ladderNumber, ladderHeight);
    this.ladderMap = ladderFactory.getLadderMap();
    
    this.coordinate = ladderFactory.getCoordinate();
    const input = this.coordinate;
    
    this.players.forEach((_, index) => {
      this.playerResult.push(new Player(index, input));
      
    });
    

    OutputView.printLadder(this.supervisor.getLadderBluePrint(this.ladderMap));

    await this.getChoice();
  }

  async getPlayers() {
    const players = await InputView.readPlayers();
    this.players = players.split(',');
    this.supervisor.setPlayers(players);

    return this.players.length; 
  }

  async getGoodsNumber() {
    const goodsNumber = await InputView.readGoodsNumber();
    this.supervisor.setGoodsNumber(goodsNumber);
  }

  async getLadderHeight() {
    const ladderHeight = await InputView.readLadderHeight();
    this.supervisor.setLadderHeight(ladderHeight);
    
    return Number(ladderHeight);
  }
  
  // -> 문제 발생 시점
  async getChoice() {
    const choice = await InputView.readChoice();
    const playerIndex = this.players.indexOf(choice);
    

    const player = this.playerResult[playerIndex];
  

    
    
    OutputView.printSingleResult(this.supervisor.getPlayerResult(player.trace, player.arriveIndex));

    return await this.getChoice();
  }  
}

export default LadderController;

const ladderController = new LadderController();
ladderController.start();