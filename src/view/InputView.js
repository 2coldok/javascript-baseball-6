import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async readPlayers() {
    const players = await Console.readLineAsync('플레이어 이름을 입력하세요. (2 ~ 5자리 영문을 쉼표로 구분)\n');
    return players.split(',');
  },

  async readGoodsNumber() {
    const goodsNumber = await Console.readLineAsync('당첨 개수를 입력하세요.\n');
    return Number(goodsNumber);
  },

  async readLadderHeight() {
    const ladderHeight = await Console.readLineAsync('사다리 높이를 입력하세요.\n');
    return Number(ladderHeight);
  },

  async readChoice() {
    return await Console.readLineAsync('결과를 확인 할 플레이어 이름을 입력하세요. (전체 결과 보기 : A)\n');
  },
};

export default InputView;
