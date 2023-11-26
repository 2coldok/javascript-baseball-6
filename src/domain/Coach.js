import { MENUS } from "../constants/MenuStorage.js";
import { Random } from "@woowacourse/mission-utils";

class Coach {
  #name;
  #hateMenus;
  
  constructor(name) {
    this.#name = name;
  }

  setHateMenus(hateMenus) {
    this.#hateMenus = hateMenus.split(',');
  }

  #isBadMenus(recommandMenus) {
    const bad = recommandMenus.filter((menu) => this.#hateMenus.includes(menu));
    if (bad.length === 0) return false;
    return true;
  }

  #recommandMenus(categoryNumbers) {
    const menus = categoryNumbers.map((number) => {
      const [_, menus] = MENUS.get(number);
      const indexArray = Array.from({ length : menus.length }, (_, index) => index);
      const randomIndex = Random.shuffle(indexArray)[0];
      return menus[randomIndex];
    });
    return menus;
  }

  getRecommandMenus(categoryNumbers) {
    const tempMenus = this.#recommandMenus(categoryNumbers);
    if (this.#isBadMenus(tempMenus)) {
      return this.getRecommandMenus(categoryNumbers);
    }
    return tempMenus;
  }
  
  getName() {
    return this.#name;
  }
}

export default Coach;
/*
const a = new Coach();
a.setHateMenus('스시,규동,미소시루,라멘');
console.log(a.getRecommandMenus([1,1,1,1,1]));*/

