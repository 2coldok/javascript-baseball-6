import { Random } from "@woowacourse/mission-utils";

// 한 주에 같은 카테고리는 최대 2회까지만 고를 수 있다.
// [1, 1, 3, 3, 1] true
const categoryValidator = (categoryNumbers) => {
  const setArray = Array.from(new Set(categoryNumbers));
  let setArrayIndex = Array.from({ length : setArray.length }, () => 0);

  categoryNumbers.forEach((element) => {
    const index = setArray.indexOf(element);
    setArrayIndex[index] += 1;
  });

  if (Math.max(...setArrayIndex) > 2) {
    return true;
  } else {
    return false;
  } 
};  

const randomCategoryNumbers = () => {
  const computer = [];
  while (computer.length < 5) {
    computer.push(Random.pickNumberInRange(1, 5));
  }
  
  if (categoryValidator(computer)) {
    return randomCategoryNumbers();
  } 

  return computer;
};



