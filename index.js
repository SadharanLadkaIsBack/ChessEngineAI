import { initGame } from "./data/data.js";
import { initGameRender } from "./render/main.js";

// will be usefull till game ends
const globalState = initGame();

initGameRender(initGame());


