import { Random } from "@woowacourse/mission-utils";

// [1, 0, 0, 0] -> [0, 1, 0, 0]
export const goodsShuffling = (array) => {
  return Random.shuffle(array);
};

// 가로줄 사잇길 생성기
// 0 : 사잇길 없는것 1 : 사잇길 있는 것
// 사다리 갯수를 입력받고 그 길이만큼 랜덤할당

// 연속되는 1이 안생기게 만듬
// 사다리 개수가 4개라면 4 - 1 개의 사잇길 랜덤을 생성후 배출
export const sideRoadShuffling = (ladderNumber) => {
  const sideRoadArray = [];
  while (sideRoadArray.length < ladderNumber - 1) {
    const randomNumber = Random.shuffle([0, 1])[0];
    const rule = (randomNumber === 1 && sideRoadArray.at(-1) === 1);
    if (!rule) {
      sideRoadArray.push(randomNumber);
    }
  }
  
  return sideRoadArray;
};


/*
const a = sideRoadShuffling(4);
console.log(a);*/