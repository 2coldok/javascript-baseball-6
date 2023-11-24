import Coach from "./Coach.js";
import { validateNames } from "../utils/Validator.js";
import { validateMenus } from "../utils/Validator.js";

class Supervisor {
  coachs = [];
  
  uploadNames(names) {
    validateNames(names);
    names.split(',').forEach((name, index) => {
      this.coachs.push(new Coach());
      this.coachs[index].setName(name);
    });
  }

  getName(index) {
    return this.coachs[index].name;
  }

  uploadHateMenus(index, hateMenusString) {
    validateMenus(hateMenusString);
    this.coachs[index].setHateMenus(hateMenusString);
  }
  
  //외부에서 랜덤 카테고리 배열 주입
  getRecommandMenus(categoryArray) {
    const result = [];
    this.coachs.forEach((coach) => {
      coach.setRecommandMenus(categoryArray);
      result.push(coach.recommandMenus);
    });
    return result;
  }
}

export default Supervisor;
/*
const a = new Supervisor();
a.uploadNames('토미,제임스,포코');
a.uploadHateMenus(0, '우동,스시');
a.uploadHateMenus(1, '뇨끼,월남쌈');
a.uploadHateMenus(2, '마파두부,고추잡채');
const k = a.getRecommandMenus(randomCategory());
console.log(k);*/