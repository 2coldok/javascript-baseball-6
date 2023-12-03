import Ladder from "./Ladder.js";


class Supervisor {
  ladder;
  ladderFactory;
  
  constructor() {
    this.ladder = new Ladder();
  }
  
  setPlayers(names) {
    this.ladder.uploadHead(names);
  }

  setGoodsNumber(number) {
    this.ladder.uploadGoodsNumber(number);
  }

  setLadderHeight(height) {
    this.ladder.uploadHeight(height);
  }
  
  /*
  startFactory() {
    this.ladderFactory = new LadderFactory(this.ladder.ladderNumber, this.ladder.ladderHeight);
    this.coordination = this.ladderFactory.coordinate;
  }*/

  getLadderBluePrint(ladderMap) {
    const HEAD = this.ladder.getHead();
    const TALE = this.ladder.getTale();
    const BODY = ladderMap;
    
    /*
    console.log(HEAD);
    BODY.forEach((element) => console.log(element));
    console.log(TALE);*/
    return [HEAD, ...BODY, TALE];
  }
  
  // nameIndex : 숫자
  
  getPlayerResult(trace, arriveIndex) {    
    return [trace, this.isMatchGoods(arriveIndex)];
  }

  isMatchGoods(arriveIndex) {
    const goodsArray = this.ladder.getGoodsArray();

    if (goodsArray[arriveIndex] === 1) {
      return true;
    }
    if (goodsArray[arriveIndex] === 0) {
      return false;
    }
  }
}

export default Supervisor;

/** 

// ladder 최초 생성
const supervisor = new Supervisor();

// ladder 디테일 생성
supervisor.setPlayers('ksh,lcw,kyh');
supervisor.setGoodsNumber('1');
supervisor.setLadderHeight('5');

// ladderFactory 최초 선언 및, ladderFacotory로 부터 좌표 coordinate 세팅하기
supervisor.startFactory();

const a = supervisor.coordination;
const b = supervisor.coordination;

console.log(a);
console.log(b);

**/