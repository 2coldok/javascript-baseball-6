import { Random } from "@woowacourse/mission-utils"

// goodsArray = [1, 1, 0, 0] 4개의 상품중 2개가 당첨
export const goodsShuffling = (goodsArray) => {
  return Random.shuffle(goodsArray);
};

// 4개의 사다리 개수면 3개의 랜덤 브릿지 생성
export const bridgeShuffling = (ladderNumber) => {
  const maxBridgeNumber = ladderNumber - 1;
  
  const computer = [];

  while (computer.length < maxBridgeNumber) {
    const random = Random.shuffle([0, 1])[0];
    if (computer.at(-1) !== random) {
      computer.push(random);
    }
  }

  return computer;
};
/*
const a = bridgeShuffling(4);
console.log(a);*/