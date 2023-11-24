import { randomMenu } from "../utils/RandomGenerator.js";
import { MENU_MAP, MENU_INDEX } from "../constants/MenuStorage.js";


class Coach {
  name;
  hateMenus = [];
  recommandMenus = [];

  menus;

  constructor() {
    this.menus = MENU_MAP();
  }

  setName(name) {
    this.name = name
  }
  setHateMenus(hateMenusString) {
    const menus = hateMenusString.split(',');
    this.hateMenus = menus;
  }

  setRecommandMenus(categoryArray) {
    categoryArray.forEach((categoryNumber) => {
      this.recommandMenus.push(this.pickRandomMenu(categoryNumber));
    });
  }

  pickRandomMenu(categoryNumber) {
    const randomIndex = randomMenu(MENU_INDEX);
    const menu = this.menus.get(categoryNumber)[randomIndex];
    
    if (this.hateMenus.includes(menu)) {
      return this.pickRandomMenu(categoryNumber); ////노션 메모 재귀시 return 안하면 버그 ..
    }
    return menu;
  }
}

export default Coach;
/*
const a = new Coach();

a.setName('수향');
a.setHateMenus('스시,규동,우동,미소시루');
const categoryArray = [2,2,1,3,4];
a.setRecommandMenus(categoryArray);
console.log(a.recommandMenus);*/
