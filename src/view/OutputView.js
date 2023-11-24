import { Console } from "@woowacourse/mission-utils";
import { OUTPUT } from "../constants/Messeage.js";
import { commandMenuFilter } from "../constants/Messeage.js";

const OutputView = {
  printStartProlog() {
    Console.print(`${OUTPUT.startProlog}\n`);
  },

  printCommandMenus(categoryNumberArray, resultArray) {
    Console.print(OUTPUT.resultProlog);
    const filtedArray = commandMenuFilter(categoryNumberArray ,resultArray)
    filtedArray.forEach((element) => {
      Console.print(element);
    });
    Console.print('');
    Console.print(OUTPUT.complete);
  },

  printErrorMesseage(messeage) {
    Console.print(`${messeage}`);
  },

  printBlank() {
    Console.print('');
  },
};

export default OutputView;