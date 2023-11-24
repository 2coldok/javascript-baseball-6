import { Random } from "@woowacourse/mission-utils";

// Random.shuffle()을 통해 임의의 순서로 섞은 후, 첫 번째 값을 사용해야 한다.

//카테고리 추천
//1이면 일식, 2면 한식, 3이면 중식, 4면 아시안, 5면 양식
export const randomCategory = () => {
  return Random.pickNumberInRange(1, 5);
};

//메뉴 추천
export const randomMenu = (menuIndexArray) => {
  const menuIndex = Random.shuffle(menuIndexArray)[0];
  return menuIndex;
};


