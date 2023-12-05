// 사다리 높이, 사다리 개수
// 주의 하나의 기둥사이에 사잇길 최소 1개
import { bridgeShuffling } from "../utils/RandomGenerator.js";

class LadderFactory {
  #ladderNumber;
  #ladderHeight;

  #validateIndex = 0;

  constructor(ladderNumber, ladderHeight) {
    this.#ladderNumber = ladderNumber;
    this.#ladderHeight = ladderHeight;
  }

  #coordinateValidator(coordinate) {
    const count = coordinate.reduce((acc, cur) => {
      return acc + cur[this.#validateIndex] 
    }, 0);
    if (count === 0) {
      this.#validateIndex = 0;
      return true;
    }
    if (this.#validateIndex === this.#ladderNumber - 2) {
      this.#validateIndex = 0;
      return false;
    }
    this.#validateIndex += 1;
    return this.#coordinateValidator(coordinate);
  }
  
  // [ [ 1, 0, 1 ], [ 0, 1, 0 ], [ 0, 0, 0 ], [ 0, 1, 0 ], [ 1, 0, 0 ] ]
  getBodyCoordinate() {
    const coordinate = [];
    while (coordinate.length < this.#ladderHeight) {
      const row = bridgeShuffling(this.#ladderNumber);
      coordinate.push(row);
    }
    if (this.#coordinateValidator(coordinate)) {
      return this.getBodyCoordinate();
    }
    return coordinate;
  }
  
  // [1, 0, 1] -> |-----|     |-----|
  #coordinateFilter(rowCoordinate) {
    const rowLog = rowCoordinate.map((element) => {
      if (element === 1) {
        return '|-----';
      }
      if (element === 0) {
        return '|     ';
      }
    });
    return rowLog.concat('|').join('');
  }
  // ['cat', 'dog', 'ksh', 'lcw']
  getHeadLog(namesArray) {
    const headArray = namesArray.map((name) => name.padEnd(5, ' '));

    return headArray.join(' ');
  }
  
  /* [
  '|     |-----|     |',
  '|-----|     |-----|',
  '|-----|     |     |',
  '|     |-----|     |',
  '|     |-----|     |'
]*/
  getBodyLog() {
    return this.getBodyCoordinate().map((element) => this.#coordinateFilter(element));
  }
  
  // [1,1,0,0] -> O     O     X     X  
  getTailLog(goodsArray) {
    const tailArray = goodsArray.map((element) => {
      if (element === 1) {
        return 'O'.padEnd(5, ' ');
      }
      if (element === 0) {
        return 'X'.padEnd(5, ' ');
      }
    });

    return tailArray.join(' ');
  }
}

export default LadderFactory;
/*
const a = new LadderFactory(10,5);

const k = a.getHeadLog(['cat', 'dog', 'ksh', 'lcw']);
const m = a.getTailLog([1,1,0,0]);
const j = a.getBodyLog();

console.log(k);
j.forEach((e) => console.log(e));
console.log(m);*/