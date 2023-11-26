import Coach from "./Coach.js";

class Supervisor {
  #coachs = [];

  constructor() {

  }
  
  // 한명씩 세팅
  setNames(names) {
    names.split(',').forEach((name) => {
      this.#coachs.push(new Coach(name));
    });
  }

  // 한명씩 세팅
  setHateMenus(coachIndex, hateMenus) {
    this.#coachs[coachIndex].setHateMenus(hateMenus);
  }
  
  // 모든 코치들에 대한 결과
  getNameWithRecommandMenus(categoryNumbers) {
    const result = this.#coachs.map((coach) => {
      return [coach.getName(), ...coach.getRecommandMenus(categoryNumbers)];
    });
    return result;
  }
}

export default Supervisor;

const a = new Supervisor();
a.setNames('수향,연희,찬웅');
a.setHateMenus(0, '고추잡채,파인애플 볶음밥');
a.setHateMenus(1, '고추잡채,파인애플 볶음밥');
a.setHateMenus(2, '스시,쌀국수');

const k = a.getNameWithRecommandMenus([1,1,3,4,4]);

console.log(k);
/*
[
  [ '수향', '스시', '스시', '탕수육', '월남쌈', '분짜' ],
  [ '연희', '스시', '오코노미야끼', '토마토 달걀볶음', '나시고렝', '팟타이' ],
  [ '찬웅', '라멘', '규동', '짜장면', '카오 팟', '파인애플 볶음밥' ]
]
*/


