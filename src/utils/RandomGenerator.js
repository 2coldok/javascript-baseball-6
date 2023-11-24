import { Random } from "@woowacourse/mission-utils";

export const randomGenerator = () => {
  const computer = [];
  while (computer.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (!computer.includes(randomNumber)) {
      computer.push(randomNumber);
    }
  }

  return computer.join('');
};
