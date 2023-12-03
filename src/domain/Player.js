import LadderFactory from "./LadderFactory.js";

class Player {
  #nameIndex;
  dotMap = new Map();

  trace = [];
  arriveIndex;

  constructor(nameIndex, ladderMap) {
    this.#nameIndex = nameIndex;
    this.setDotMap(ladderMap);
    this.startTracing();
  }

  slicer(array) {
    const dotArray = [];
    for (let i = 0; i < array.length - 1; i++) {
      const dot = array.slice(i, i + 2);
      dotArray.push(dot);
    }
    return dotArray;
  }

  setDotMap(ladderMap) {
    ladderMap.forEach((element, index) => {
      const elementt = [0, ...element, 0];
      this.dotMap.set(index, this.slicer(elementt));
    });
  }
  
  // dot = [0, 1]
  makeDirection(dot) {
    if (dot[0] === 1) return 'L';
    if (dot[1] === 1) return 'R';
    if (dot[0] === 0 && dot[1] === 0) return 'D';
  }
  
  // direction : R or L or D
  makeIndexLocation(startIndex, direction) {
    if (direction === 'R') return startIndex + 1;
    if (direction === 'L') return startIndex - 1;
    if (direction === 'D') return startIndex;
  }
  
  startTracing() {
    let startIndex = this.#nameIndex;
    
    for (let i = 0; i < this.dotMap.size; i++) {
      const dotArray = this.dotMap.get(i);
      const direction = this.makeDirection(dotArray[startIndex]);
      this.trace.push(direction);

      startIndex = this.makeIndexLocation(startIndex, direction);
    }
    this.arriveIndex = startIndex;
  }
}

export default Player;
/*
const ladderFactory = new LadderFactory(3,5);
const coordinate = ladderFactory.getCoordinate();
const road = ladderFactory.getLadderMap();
console.log(road);

const a = new Player(1, coordinate);
console.log(a.trace);
console.log(a.arriveIndex)*/