import { Console } from "@woowacourse/mission-utils"

const InputView = {
  async readPlayers() {
    return await Console.readLineAsync(`플레이어 이름을 입력하세요. (2 ~ 5자리 영문을 쉼표로 구분)\n`);
  },

  async readGoodsNumber() {
    return await Console.readLineAsync(`당첨 개수를 입력하세요. (min : 1, max : 3)\n`);
  },

  async readLadderHeight() {
    return await Console.readLineAsync(`사다리 높이를 입력하세요 (min : 2, max : 10)\n`);
  },

  async readChoice() {
    return await Console.readLineAsync(`결과를 확인 할 플레이어 이름을 입력하세요. (전체 결과 보기 : A)\n`);
  },
};

export default InputView;
