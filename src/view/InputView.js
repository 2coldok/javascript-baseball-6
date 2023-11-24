import { Console } from "@woowacourse/mission-utils";
import { INPUT } from "../constants/Messeage.js";

const InputView = {
  async getCoahsNames() {
    return await Console.readLineAsync(`${INPUT.coachName}\n`);
  },

  async getHateMenus(name) {
    return await Console.readLineAsync(`${INPUT.hateMenu(name)}\n`);
  },
};

export default InputView;