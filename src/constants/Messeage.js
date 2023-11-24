import { CATEGORY } from "./MenuStorage.js";


export const INPUT = Object.freeze({
  coachName : '코치의 이름을 입력해 주세요. (, 로 구분)',
  hateMenu : (coachName) => `${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.`,
});

export const OUTPUT = Object.freeze({
  startProlog : '점심 메뉴 추천을 시작합니다.',
  resultProlog : '메뉴 추천 결과입니다.',
  complete : '추천을 완료했습니다.',
});

export const commandMenuFilter = (categroyArray, resultArray) => {
  const WEEK = '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]';
  const category = ['카테고리', ...categoryFilter(categroyArray)];
  const filtedCategory = `[ ${category.join(' | ')} ]`
  const list = [];
  resultArray.forEach((element) => {
    list.push(`[ ${element.join(' | ')} ]`);
  });

  return [WEEK, filtedCategory, ...list];
};

export const categoryFilter = (categoryNumberArray) => {
  return categoryNumberArray.map((categoryNumber) => {
    return CATEGORY[String(categoryNumber)];
  });
};
/*
console.log(commandMenuFilter([1,1,2,3,3], [
  ['pobi' ,'하이라이스', '오니기리', '쌈밥', '칼국수', '볶음면' ],
  ['crong' ,'가츠동', '라멘', '김치찌개', '쌈밥', '볶음면' ],
  [ 'java','우동', '미소시루', '칼국수', '떡볶이', '짜장면' ]
]))*/
/*
console.log(commandMenuFilter([
  ['pobi' ,'하이라이스', '오니기리', '쌈밥', '칼국수', '볶음면' ],
  ['crong' ,'가츠동', '라멘', '김치찌개', '쌈밥', '볶음면' ],
  [ 'java','우동', '미소시루', '칼국수', '떡볶이', '짜장면' ]
]));*/