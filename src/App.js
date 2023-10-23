import { Console } from "@woowacourse/mission-utils";
import RandomNumber from "./RandomNumber.js";
import Exception from "./Exception.js";
import MESSEAGE from "./Constants.js";
import Baseball from "./Baseball.js";



class App {
  async play() {
    Console.print(MESSEAGE.START_GAME);
    const randomNum = RandomNumber.makeRandomNumber();
    
    while(1){
      const inputNum = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
      if(!Exception.isNonException(inputNum)) throw new Error("[ERROR]")

      const baseball = new Baseball(inputNum, randomNum)
      Console.print(baseball.outcome());
      if(baseball.outcome() === MESSEAGE.STRIKEOUT) {
        Console.print(MESSEAGE.CELEBRATE_END);
        break;

      }
    }

    Console.print(MESSEAGE.RESTART_EXIT); //재시작 하겠습니까?
    
    const answer = await Console.readLineAsync("");

    if(answer === MESSEAGE.RESTART) {
      const randomNum2 = RandomNumber.makeRandomNumber();
      while(1){
        const inputNum2 = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
        if(!Exception.isNonException(inputNum2)) throw new Error("[ERROR]")

        const baseball = new Baseball(inputNum2, randomNum2)
        Console.print(baseball.outcome());
        if(baseball.outcome() === MESSEAGE.STRIKEOUT) {
          Console.print(MESSEAGE.CELEBRATE_END)
          break;
        }
      }

      Console.print(MESSEAGE.RESTART_EXIT);
      const answer2 = await Console.readLineAsync("");
      if(answer2 === MESSEAGE.EXIT){
        this.end();
      }
    }else if(answer === MESSEAGE.EXIT) {
      this.end()
    }
    
  }

  end() {
    return
  }
}


/* then chain 방식
class App {
  play() {
    Console.print(MESSEAGE.START_GAME)
    this.gaming(RandomNumber.makeRandomNumber());
  }

  inputNumberAsking() {
    return Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
  }

  restartAsking() {
    return Console.readLineAsync('');
  }
//then chain 이용하기
  gaming(random) {
    this.inputNumberAsking()
    .then((answer) => {
      this.checkError(answer);
      const result = this.baseball(answer, random)
      Console.print(result)
      return result
    })
    .then((result) => this.strikeout(result, random))
  }

  strikeout(result, random) {
    if(result === MESSEAGE.STRIKEOUT) this.end();
    if(result !== MESSEAGE.STRIKEOUT) this.gaming(random);
    
  }

  baseball(input,random) {
    const result = new Baseball(input, random);
    return result.outcome();
  }

  checkError(input) {
    if(!Exception.isNonException(input)) throw new Error("[ERROR]")
  }  
  

  end() {
    Console.print(MESSEAGE.CELEBRATE_END);
    Console.print(MESSEAGE.RESTART_EXIT);
    this.restartAsking()
    .then((answer) => {
      if(answer === MESSEAGE.RESTART) this.gaming(RandomNumber.makeRandomNumber());
      if(answer !== MESSEAGE.RESTART && answer !== MESSEAGE.EXIT) throw new Error("[ERROR]")
      if(answer === MESSEAGE.EXIT) this.exit()
    })
    

  }

  exit() {
    return
  }
}
*/

/*
class App {
  async play() {
    Console.print(MESSEAGE.START_GAME);
    const radomNum = RandomNumber.makeRandomNumber();
    const inputNum = await Console.readLineAsync(MESSEAGE.START_GAME);
    if(!Exception.isNonException(inputNum)) throw new Error("[ERROR]");
    this.gaming(inputNum,radomNum);
  }

  async gaming(inputNum, randomNum) {
    try{
      Console.print(this.gameResult(inputNum, randomNum));
      if(this.gameResult(inputNum, randomNum) === MESSEAGE.STRIKEOUT) this.end()
      if(this.gameResult(inputNum, randomNum) !== MESSEAGE.STRIKEOUT) {
        const newInputNum = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
        this.gaming(newInputNum, randomNum);
      }
      

    }catch(e){
      throw new Error(e)
    }

  }

  

  async end() {
    Console.print(MESSEAGE.CELEBRATE_END);
    Console.print(MESSEAGE.RESTART_EXIT);
    const answer = await Console.readLineAsync("");
    
    if(answer !== MESSEAGE.RESTART && answer !== MESSEAGE.EXIT) throw new Error("[ERROR]")
    if(answer === MESSEAGE.RESTART) {
      const newInputNum2 = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
      this.gaming(newInputNum2, RandomNumber.makeRandomNumber())
    }
    if(answer === MESSEAGE.EXIT) this.exit()
  }

  gameResult(inputNum, RandomNum) {
    const baseball = new Baseball(inputNum, RandomNum);
    return baseball.outcome()
  }

  exit() {
    return
  }
}
*/



/*스파게이트코드 but test 통과
class App {
  async play() {
    Console.print(MESSEAGE.START_GAME);
    const randomNum = RandomNumber.makeRandomNumber();
    
    while(1){
      const inputNum = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
      if(!Exception.isNonException(inputNum)) throw new Error("[ERROR]")

      const baseball = new Baseball(inputNum, randomNum)
      Console.print(baseball.outcome());
      if(baseball.outcome() === MESSEAGE.STRIKEOUT) {
        Console.print(MESSEAGE.CELEBRATE_END);
        break;

      }
    }

    Console.print(MESSEAGE.RESTART_EXIT);
    
    const answer = await Console.readLineAsync("");

    if(answer === MESSEAGE.RESTART) {
      const randomNum2 = RandomNumber.makeRandomNumber();
      while(1){
        const inputNum2 = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
        if(!Exception.isNonException(inputNum2)) throw new Error("[ERROR]")

        const baseball = new Baseball(inputNum2, randomNum2)
        Console.print(baseball.outcome());
        if(baseball.outcome() === MESSEAGE.STRIKEOUT) {
          Console.print(MESSEAGE.CELEBRATE_END)
          break;
        }
      }

      Console.print(MESSEAGE.RESTART_EXIT);
      const answer2 = await Console.readLineAsync("");
      if(answer2 === MESSEAGE.EXIT){
        this.end();
      }
    }
    if(answer === MESSEAGE.EXIT) this.end()

  }

  end() {
    return
  }
}

*/



/* 첫 완성 but 실패
class App {
  async play() {
    Console.print(MESSEAGE.START_GAME);                                                      

    const firstRandom = RandomNumber.makeRandomNumber();                                       
    const inputNum =  await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);                         
    
    this.findError(inputNum)                            
    this.calculate(inputNum, firstRandom)                                                          
  }

  calculate(input,random) {
    const baseball = new Baseball(input, random);                                              
    const result = baseball.outcome();
    Console.print(result);
  
    if(result === MESSEAGE.STRIKEOUT) this.choice()
    if(result !== MESSEAGE.STRIKEOUT) this.gaming(random)
  }  

  async gaming(random) { 
    const inputss = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER);
    this.findError(inputss);  
    this.calculate(inputss, random)
    
  }

  async choice() {
    const inputs = await Console.readLineAsync(`${MESSEAGE.CELEBRATE_END}\n${MESSEAGE.RESTART_EXIT}\n`);
    this.choiceHelp(inputs);  
  }

  findError(inputNum) {
    if(!Exception.isNonException(inputNum)) throw new Error("[ERROR]")
  }

  choiceHelp(inputNum) {
    if(inputNum === MESSEAGE.RESTART){
      this.gaming(RandomNumber.makeRandomNumber());
    }else if(inputNum === MESSEAGE.EXIT) {
      finish();
    }else{
      throw new Error("[ERROR]")
    }

  }
}

function finish() {
  return
}
*/

/*
const app = new App()
app.play();
*/



export default App;
