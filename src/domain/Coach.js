import { MENUS } from "../constants/MenuStorage.js";
import { Random } from "@woowacourse/mission-utils";

class Coach {
  #name;
  #hateMenus;
  #recommandMenus = [];
  
  constructor(name) {
    this.#name = name;
  }

  setHateMenus(hateMenus) {
    this.#hateMenus = hateMenus.split(',');
  }

  #isHateMenu(randomMenu) {
    if (this.#hateMenus.includes(randomMenu)) {
      return true;
    }
    return false;
  }

  #isDupleMenu(randomMenu) {
    if (this.#recommandMenus.includes(randomMenu)) {
      return true;
    }
    return false;
  }
  
  setRecommandMenu(categoryNumber) {
    const [category, menus] = MENUS.get(categoryNumber);
    const indexArray = Array.from({ length : menus.length }, (_, index) => index);
    const menu = menus[Random.shuffle(indexArray)[0]];

    if (this.#isHateMenu(menu) || this.#isDupleMenu(menu)) {
      return this.setRecommandMenu(categoryNumber);
    }
    this.#recommandMenus.push(menu);
  }

  getName() {
    return this.#name;
  }

  getRecommandMenus() {
    return this.#recommandMenus;
  }
}

export default Coach;
