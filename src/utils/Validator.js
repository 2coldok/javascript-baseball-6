import { MENUS } from "../constants/MenuStorage.js";
import { MENUS_ARRAY } from "../constants/MenuStorage.js";

const nameLength = (array) => {
  const count = array.filter((element) => element.length < 2 || element.length > 4);
  if (count.length !== 0) {
    throw new Error('[ERROR] 코치 이름은 2글자 이상 4글자 이하 입니다.');
  }
};

const coachNumber = (array) => {
  if (array.length < 2 || array.length > 5) {
    throw new Error('[ERROR] 코치는 최소 2명 최대 5명 입니다.');
  }
};

const dupleCoach = (array) => {
  if (array.length !== new Set(array).size) {
    throw new Error('[ERROR] 코치 이름 중복 불허합니다.');
  }
};

const nonName = (array) => {
  array.forEach((ele) => {
    if (ele === '') {
      throw new Error('[ERROR] 이름이 없는 코치가 있습니다.');
    };
  })
};

export const validateNames = (names) => {
  const array = names.split(',').map((ele) => ele.trim());
  nameLength(array);
  coachNumber(array);
  dupleCoach(array);
  nonName(array); 
};

// 

const nonMenu = (array) => {
  const count = array.filter((menu) => MENUS_ARRAY.includes(menu));
  
  if (count.length !== array.length) {
    throw new Error('[ERROR] 존재하지 않는 메뉴입니다.');
  }
};

const menuLimit = (array) => {
  if (array.length > 2) {
    throw new Error('[ERROR] 못먹는 메뉴 최소 0개 최대 2개 까지만 허용');
  }
};

const dupleMenu = (array) => {
  if (array.length !== new Set(array).size) {
    throw new Error('[ERROR] 중복된 메뉴가 있습니다.');
  }
};

export const validateMenus = (hateMenus) => {
  const array = hateMenus.split(',').map((element) => element.trim());

  nonMenu(array);
  menuLimit(array);
  dupleMenu(array);
};
