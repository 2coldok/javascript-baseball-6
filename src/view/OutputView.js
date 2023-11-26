import { Console } from "@woowacourse/mission-utils";
import { categoryFilter, menusFilter } from "../constants/Messeage.js";

const OutputView = {
  printProlog() {
    Console.print(`점심 메뉴 추천을 시작합니다.\n`);
  },

  printResult(categoryNumbers, recommand) {
    const CATEGORY = categoryFilter(categoryNumbers);
    const nameWithMenus = menusFilter(recommand);
    const head = [
      '메뉴 추천 결과입니다.',
      '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
      `${CATEGORY}`,
    ];
    
    const result = head.concat(nameWithMenus);
    result.forEach((element) => Console.print(element));
    Console.print('');
    Console.print('추천을 완료했습니다.');
  },

  printBlank() {
    Console.print('');
  },

  printError(error) {
    Console.print(`${error}`);
  },
};

export default OutputView;
