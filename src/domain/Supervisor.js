import Coach from "./Coach.js";
import { Random } from "@woowacourse/mission-utils";
import { validateNames, validateMenus } from "../utils/Validator.js";

class Supervisor {
  #coachs = [];
  #categoryNumbers = [];
  #recommandCycle = 0;

  setNames(names) {
    validateNames(names);
    names.split(',').forEach((name) => {
      this.#coachs.push(new Coach(name.trim()));
    });
  }

  setHateMenus(coachIndex, hateMenus) {
    validateMenus(hateMenus);
    this.#coachs[coachIndex].setHateMenus(hateMenus);
  }

  // 카테고리 넘버를 push 하기 전 미리 대조해보는 작업
  #isOverCategory(categoryNumber) {
    const inputNumbers = this.#categoryNumbers.filter((element) => element === categoryNumber);
    
    if (inputNumbers.length >= 2) {
      return true;
    }
    return false;
  }
  
  #randomCategory() {
    const number = Random.pickNumberInRange(1,5);
    if (this.#isOverCategory(number)) {
      return this.#randomCategory();
    }
    this.#categoryNumbers.push(number);
    return number;
  }
  
  setMenus() {
    const categoryNumber = this.#randomCategory();
    this.#coachs.forEach((coach) => {
      coach.setRecommandMenu(categoryNumber);
    });
    this.#recommandCycle += 1;
    
    if (this.#recommandCycle !== 5) {
      return this.setMenus();
    }
  }
  
  getNameWithMenus() {
    const reuslt = this.#coachs.map((coach) => {
      const menus = coach.getRecommandMenus();
      menus.unshift(coach.getName());
      return menus;
    });
    return reuslt;
  }

  getCategoryNumber() {
    return this.#categoryNumbers;
  }

  getName(index) {
    const name = this.#coachs[index].getName();
    
    return name;
  }

  getCoachNumbers() {
    return this.#coachs.length;
  }
}

export default Supervisor;
