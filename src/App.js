import Controller from "./controller/Controller.js";

class App {
  async play() {
    const k = new Controller();
    await k.start();
  }
}

export default App;
