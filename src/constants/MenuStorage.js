/*
export const MENU = Object.freeze({
  japan : ['규동', '우동', '미소시루', '스시', '가츠동', '오니기리', '하이라이스', '라멘', '오코노미야끼'],
  korea : ['김밥', '김치찌개', '쌈밥', '된장찌개', '비빔밥', '칼국수', '불고기', '떡볶이', '제육볶음'],
  china : ['깐풍기', '볶음면', '동파육', '짜장면', '짬뽕', '마파두부', '탕수육', '토마토 달걀볶음', '고추잡채'],
  asia : ['팟타이', '카오 팟', '나시고렝', '파인애플 볶음밥', '쌀국수', '똠얌꿍', '반미', '월남쌈', '분짜'],
  western : ['라자냐', '그라탱', '뇨끼', '끼슈', '프렌치 토스트', '바게트', '스파게티', '피자', '파니니'],
});*/

export const JAPAN = ['규동', '우동', '미소시루', '스시', '가츠동', '오니기리', '하이라이스', '라멘', '오코노미야끼'];
export const KOREA = ['김밥', '김치찌개', '쌈밥', '된장찌개', '비빔밥', '칼국수', '불고기', '떡볶이', '제육볶음'];
export const CHINA = ['깐풍기', '볶음면', '동파육', '짜장면', '짬뽕', '마파두부', '탕수육', '토마토 달걀볶음', '고추잡채'];
export const ASIA = ['팟타이', '카오 팟', '나시고렝', '파인애플 볶음밥', '쌀국수', '똠얌꿍', '반미', '월남쌈', '분짜'];
export const WESTERN = ['라자냐', '그라탱', '뇨끼', '끼슈', '프렌치 토스트', '바게트', '스파게티', '피자', '파니니'];
export const EVERY_MENUS = [...JAPAN, ...KOREA, ...CHINA, ...ASIA, ...WESTERN, ...WESTERN, ''];

export const CATEGORY = Object.freeze({
  1 : '일식',
  2 : '한식',
  3 : '중식',
  4 : '아시안',
  5 : '양식',
});

export const MENU_MAP = () => {
  const map = new Map();
  map
    .set(1, JAPAN)
    .set(2, KOREA)
    .set(3, CHINA)
    .set(4, ASIA)
    .set(5, WESTERN);
  
  return map;
};

export const MENU_INDEX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
