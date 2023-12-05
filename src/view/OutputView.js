import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printProlog() {
    Console.print('사다리 게임을 시작합니다.\n');
  },

  printLadder(head, body, tail) {
    Console.print(head);
    body.forEach((element) => Console.print(element));
    Console.print(tail);
    Console.print('');
  },

  printSingleResult(roadArray, result) {
    const road = roadArray.join(' -> ')
    Console.print(`경로 조회 : ${road}`);
    Console.print(`결과 : ${result}`);
    Console.print('');
  },

  printAllResult(playersArray, resultArray) {
    Console.print('<사다리 타기 결과>');
    playersArray.forEach((player, index) => {
      Console.print(`${player} -> ${resultArray[index]}`);
    });
  },

  printBlank() {
    Console.print('');
  },
};

export default OutputView;