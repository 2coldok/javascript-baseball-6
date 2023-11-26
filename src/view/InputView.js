import { Console } from "@woowacourse/mission-utils"

const InputView = {
  async getCoach() {
    return await Console.readLineAsync(`코치의 이름을 입력해 주세요. (, 로 구분)\n`); 
  },

  async getHateMenus(coachName) {
    return await Console.readLineAsync(`${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n`);
  },
};

export default InputView;
