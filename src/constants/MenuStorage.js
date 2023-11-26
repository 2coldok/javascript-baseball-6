const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

const newArray = Object.entries(SAMPLE).map(([category, menus]) => {
  const array = menus.split(',').map((element) => element.trim());
  return [category, array];
});

const map = new Map();

newArray.forEach(([category, menus], index) => {
  map.set(index + 1, [category, menus]);
});

export const MENUS = map;

// 없는 메뉴 찾기 위해 모든 메뉴를 하나의 배열로 만드는 과정
const allMenus = () => {
  const all = Array.from(MENUS).map((element) => {
    const [categoryNumber, data] = element;
    const [category, menus] = data;
    return menus;
  });
  
  const result = all.reduce((acc, cur) => {
    return acc.concat(cur);
  }, [])

  return result.concat('');
};

export const MENUS_ARRAY = allMenus();