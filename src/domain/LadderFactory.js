import { sideRoadShuffling } from "../util/RandomGenerator.js";

class LadderFactory {
  #ladderNumber;
  #ladderHeight;

  coordinate = [];
  validateIndex = 0;


  constructor(ladderNumber, ladderHeight) {
    this.#ladderNumber = ladderNumber;
    this.#ladderHeight = ladderHeight;
    this.setCoordinate();
  }
  
  sideRoadValidator() {
    const count = this.coordinate.reduce((acc, cur) => {
      return acc + cur[this.validateIndex] 
    }, 0);
  
    if (count === 0) {
      return true;
    }
    if (this.validateIndex === this.#ladderNumber - 2) {
      return false;
    }
    if (count !== 0 ) {
      this.validateIndex += 1;
      return this.sideRoadValidator();
    }
  }

  setCoordinate() {
    while (this.coordinate.length < this.#ladderHeight) {
      const randomCoordinate = sideRoadShuffling(this.#ladderNumber);
      this.coordinate.push(randomCoordinate);
    }
    if (this.sideRoadValidator()) {
      this.coordinate = [];
      this.validateIndex = 0;
      return this.setCoordinate();
    }
  }

  makeLego(array) {
    const SIDEROAD_UNIT = '|-----';
    const NON_SIDEROAD_UNIT = '|     ';
    const LAST_PIECE = '|';

    return array.map((element) => {
      if (element === 1) return SIDEROAD_UNIT;
      if (element === 0) return NON_SIDEROAD_UNIT;
    }).concat(LAST_PIECE).join('');
  }

  getCoordinate() {
    return this.coordinate;
  }

  getLadderMap() {
    const ladderMap = this.coordinate.map((element) => {
      return this.makeLego(element);
    });
    return ladderMap;
  }
}

export default LadderFactory;

/*
const a = new LadderFactory(10, 3);
a.setCoordinate();
const k = a.getLadderMap()
console.log(k);
*/



