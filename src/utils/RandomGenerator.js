import { Random } from "@woowacourse/mission-utils";

// Random.shuffle()을 통해 임의의 순서로 섞은 후, 첫 번째 값을 사용해야 한다.

//카테고리 추천
//1이면 일식, 2면 한식, 3이면 중식, 4면 아시안, 5면 양식
export const isOverDuplication = (categoryArray) => {
  const setArray = Array.from(new Set(categoryArray));
  const setIndexArray = Array.from({ length : setArray.length }, () => 0);

  categoryArray.forEach((element) => {
    const index = setArray.indexOf(element);
    setIndexArray[index] += 1;
  });

  if (Math.max(...setIndexArray) > 2) return true;
  return false;
};

export const randomCategory = () => {
  const categoryArray = [];
  while (categoryArray.length < 5) {
    categoryArray.push(Random.pickNumberInRange(1, 5));
  }
  if (isOverDuplication(categoryArray)) {
    return randomCategory();
  } 
  return categoryArray;
};

//메뉴 추천
export const randomMenu = (menuIndexArray) => {
  const menuIndex = Random.shuffle(menuIndexArray)[0];
  return menuIndex;
};
