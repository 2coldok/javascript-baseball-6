// 1 이름 배열 ->
// 2 당첨 개수 숫자 ->
// 3 사다리 높이 숫자 ->
// 4 초이스 원본 그대로 ->

const nameNumber = (array) => {
  array.forEach((name) => {
    if (name.length < 2 || name.length > 5) {
      throw new Error('[ERROR] 이름은 2글자 ~ 5글자 사이.');
    }
  });
};

const playersNumber = (array) => {
  if (array.length < 2 || array.length > 10) {
    throw new Error('[ERROR] 플레이어는 2명 ~ 10명 사이.');
  }
};

const ENGLISH = /^[a-zA-Z]*$/;

const nameForm = (array) => {
  array.forEach((name) => {
    if (name.includes(' ')) {
      throw new Error('[ERROR] 이름에 공백이 포함될 수 없습니다.');
    }
    if (!ENGLISH.test(name)) {
      throw new Error('[ERROR] 이름은 영어만 가능합니다');
    }
  });
};

const nameDuple = (array) => {
  if (new Set(array).size !== array.length) {
    throw new Error('[ERROR] 중복된 이름이 있습니다.');
  }
};

export const playersValidator = (array) => {
  nameNumber(array);
  playersNumber(array);
  nameForm(array);
  nameDuple(array);
};

///
const NUMBER = /^[0-9]*$/

export const goodsNumberValidator = (goodsNumber, ladderNumber) => {
  if (!NUMBER.test(String(goodsNumber))) {
    throw new Error('[ERROR] 숫자가 아닌 무언가가 포함되어 있습니다.');
  }

  if (goodsNumber < 1 || goodsNumber > ladderNumber -1) {
    throw new Error(`[ERROR] 당첨 개수는 최소 1개 최대 ${ladderNumber - 1}개 입니다`);
  }
};

export const ladderHeightValidator = (ladderHeight) => {
  if (!NUMBER.test(String(ladderHeight))) {
    throw new Error('[ERROR] 숫자가 아닌 무언가가 포함되어 있습니다.');
  }
  
  if (ladderHeight < 2 || ladderHeight > 10) {
    throw new Error('[ERROR] 사다리 높이는 최소 2 최대 10 입니다.');
  }
};

export const choiceValidator = (choice, playersArray) => {
  const list = playersArray.concat('A');
  
  if (!list.includes(choice)) {
    throw new Error('[ERROR] 잘못된 입력입니다. 플레이어 이름 또는 A를 눌러주세요');
  }
};
