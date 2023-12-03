import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printProlog() {
    Console.print(`사다리 게임을 시작합니다.\n`);
  },

  printLadder(array) {
    array.forEach((element) => Console.print(element));
    Console.print('');
  },
  
  // return [player.trace, this.isMatchGoods(player.arriveIndex)];
  printSingleResult(array) {
    const [trace, match] = array;
    Console.print(`경로 조회 : ${trace.join(' -> ')}`);
    
    if (match) {
      Console.print(`결과 : 당첨`);
    }
    if (!match) {
      Console.print(`결과 : 꽝`);
    }
    Console.print('');
  },

  printAllResult() {
    
  }

};

export default OutputView;