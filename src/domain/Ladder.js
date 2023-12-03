import { goodsShuffling } from "../util/RandomGenerator.js";

class Ladder {
  #head = [];
  #tale;

  ladderNumber;
  ladderHeight;
  
  // 첫번째 input
  uploadHead(names) {
    names.split(',').forEach((name) => {
      this.#head.push(name.padEnd(5, ' '));
    });
    this.ladderNumber = names.split(',').length;
  }

  getHead() {
    return this.#head.join(' ');
  }
  
  // 두번째 input
  uploadGoodsNumber(number) {
    const goodsNumber = Number(number);
    const goods = Array.from({ length : goodsNumber }, () => 1);
    const boom = Array.from({ length : this.ladderNumber - goodsNumber }, () => 0);
    this.#tale = goodsShuffling(goods.concat(boom));
  }

  getGoodsArray() {
    return this.#tale;
  }

  getTale() {
    const tale = this.#tale.map((element) => {
      if (element === 1) {
        return 'O'.padEnd(5, ' ');
      }
      if (element === 0) {
        return 'X'.padEnd(5, ' ');
      }
    });

    return tale.join(' ');
  }
  
  // 세번째 input 
  uploadHeight(number) {
    this.ladderHeight = Number(number);
  }
}

export default Ladder;

/*
const a = new Ladder();
a.uploadHead('chan,suhan,yeon');
a.uploadGoodsNumber('1');*/
