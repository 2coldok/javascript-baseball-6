/*[ [ 1, 0, 1 ], [ 0, 1, 0 ], [ 0, 0, 0 ], [ 0, 1, 0 ], [ 1, 0, 0 ] ]*/


class LadderCalculator {
  #map;
  #roadIndex;

  constructor(bodyCoordinate) {
    this.#map = this.#coordinateFormatter(bodyCoordinate);
  }
  // [0, 1, 0, 1, 0] => [ [0, 1], [1, 0], [0, 1], [1, 0] ]
  #silcer(rowCoordinate) {
    const result = [];
    for (let i = 0; i < rowCoordinate.length - 1; i++) {
      result.push(rowCoordinate.slice(i, i + 2));
    }
    return result;
  }
  /*
  Map(5) {
  0 => [ [ 0, 1 ], [ 1, 0 ], [ 0, 1 ], [ 1, 0 ] ],
  1 => [ [ 0, 0 ], [ 0, 1 ], [ 1, 0 ], [ 0, 0 ] ],
  2 => [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
  3 => [ [ 0, 0 ], [ 0, 1 ], [ 1, 0 ], [ 0, 0 ] ],
  4 => [ [ 0, 1 ], [ 1, 0 ], [ 0, 0 ], [ 0, 0 ] ]
}
  */
  #coordinateFormatter(bodyCoordinate) {
    const map = new Map();
    const temp = bodyCoordinate.map((element) => [0, ...element, 0]);
    temp.forEach((element, index) => {
      map.set(index, this.#silcer(element));
    });

    return map;
  }
  
  // [1, 0]
  #direction(array) {
    if (array[0] === 1) return 'L';
    if (array[1] === 1) return 'R';
    if (array[0] !== 1 && array[1] !== 1) return 'D';
  }
  
  // R L D
  #indexChanger(direction) {
    if (direction === 'L') return -1;
    if (direction === 'R') return 1;
    if (direction === 'D') return 0;
  }

  getRoad(playerIndex) {
    this.#roadIndex = playerIndex;
    const road = [];
    for (let i = 0; i < this.#map.size; i++) {
      const direction = this.#direction(this.#map.get(i)[this.#roadIndex]);
      road.push(direction);
      this.#roadIndex += this.#indexChanger(direction);
    }
    return road; 
  }

  getResultIndex(playerIndex) {
    this.getRoad(playerIndex);
    
    return this.#roadIndex;
  }

  getmap() {
    return this.#map;
  }
}

export default LadderCalculator;
/*
const ladderFactory = new LadderFactory(4,5);
const bodyCoordinate = ladderFactory.getBodyCoordinate();
const head = ladderFactory.getHeadLog(['cat', 'dog', 'ksh', 'lcw']);
const body = ladderFactory.getBodyLog()
const tail = ladderFactory.getTailLog([1,1,0,0]);

console.log(head);
body.forEach((e) => console.log(e));
console.log(tail);

const ladderCalculator = new LadderCalculator(bodyCoordinate);
console.log(bodyCoordinate);
console.log(ladderCalculator.getmap());
console.log(ladderCalculator.getRoad(0), ladderCalculator.getResultIndex(0));
console.log(ladderCalculator.getRoad(1), ladderCalculator.getResultIndex(1));
console.log(ladderCalculator.getRoad(2), ladderCalculator.getResultIndex(2));
console.log(ladderCalculator.getRoad(3), ladderCalculator.getResultIndex(3));
*/
