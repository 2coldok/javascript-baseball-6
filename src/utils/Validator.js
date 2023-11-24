import { EVERY_MENUS } from "../constants/MenuStorage.js";

export const validateNameMinMax = (nameArray) => {
  nameArray.forEach((name) => {
    if (name.length < 2 || name.length > 4) {
      throw new Error('[ERROR] 코치의 이름은 최소 2글자 최대 4글자 입니다.');
    }  
  });
}

export const validateCoachNumber = (nameArray) => {
  if (nameArray.length < 2 || nameArray.length > 5) {
    throw new Error('[ERROR] 코치는 최소 2명에서 최대 5명 입니다.');
  }
};

export const validateDuplication = (nameArray) => {
  if (nameArray.length !== new Set(nameArray).size) {
    throw new Error('[ERROR] 이름이 중복될 수 없습니다');
  }
};

export const validateNames = (names) => {
  const nameArray = names.split(',');
  validateNameMinMax(nameArray);
  validateCoachNumber(nameArray);
  validateDuplication(nameArray);
};

//
//hateMenusString

export const validateMenusNumber = (menusArray) => {
  if (menusArray.length > 2) {
    throw new Error('[ERROR] 못 먹는 메뉴는 최소 0개 최대 2개');
  }
};

export const validateMenuDuplication = (menusArray) => {
  if (menusArray.length !== new Set(menusArray).size) {
    throw new Error('[ERROR] 메뉴 중복 오류');
  }
};

export const validateMenuNonExist = (menusArray) => {
  menusArray.forEach((menu) => {
    if (!EVERY_MENUS.includes(menu)) {
      throw new Error('[ERROR] 존재하지 않는 메뉴입니다.');
    }
  });  
};

export const validateMenus = (hateMenusString) => {
  const menus = hateMenusString.split(',');
  validateMenusNumber(menus);
  validateMenuDuplication(menus);
  validateMenuNonExist(menus);
};