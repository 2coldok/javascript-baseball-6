import { QUESTION } from "./constants/Messeage.js";
import { Console } from "@woowacourse/mission-utils";

const InputView = {
  async getNumber() {
    return await Console.readLineAsync(`${QUESTION.inputNumber}`); 
  },
  
  async getRestartChoice() {
    return await Console.readLineAsync(`${QUESTION.restart}\n`);
  },
};

export default InputView;
