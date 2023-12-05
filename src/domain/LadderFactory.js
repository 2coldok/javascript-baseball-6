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
}

export default LadderFactory;
/*
const a = new LadderFactory(4,5);
console.log(a.getBodyCoordinate());*/