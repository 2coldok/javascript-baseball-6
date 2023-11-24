import { Console } from "@woowacourse/mission-utils";
import { QUESTION } from "./constants/Messeage.js";
import { baseballResult } from "./constants/Formatter.js";

const OutputView = {
  prolog() {
    Console.print(QUESTION.prolog);
  },

  printResult(strikeNumber, ballNumber, isNothing) {
    Console.print(baseballResult(strikeNumber, ballNumber, isNothing));
  },
  
  strikeOut() {
    Console.print(QUESTION.strikeOut);
  },

  getChoice() {
    Console.print(QUESTION.restart);
  },

};

export default OutputView;
