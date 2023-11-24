import { validator } from "../utils/Validator.js";

class GameReferee {
  #inputArray;
  #randomNumberArray;

  constructor(userInputString, randomNumberString) {
    validator(userInputString);
    this.#inputArray = Array.from(userInputString);
    this.#randomNumberArray = Array.from(randomNumberString);
    
  }

  strikeNumber() {
    return this.#inputArray
      .filter((element, index) => element === this.#randomNumberArray[index])
      .length;
  }

  ballNumber() {
    const ballResultArray = [];
    this.#inputArray.forEach((element, index) => {
      if (element !== this.#randomNumberArray[index] && this.#randomNumberArray.includes(element)) {
        ballResultArray.push(element);
      }
    });

    return ballResultArray.length;
  }

  isNothing() {
    if (this.strikeNumber() === 0 && this.ballNumber() === 0) {
      return true;
    } else {
      return false;
    }
  }
}

export default GameReferee;
