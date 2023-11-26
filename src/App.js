import LunchController from "./controller/LunchController.js";

class App {
  async play() {
    const lunchController = new LunchController();
    lunchController.startRecommand();
  }
}

export default App;

const app = new App();
app.play();
