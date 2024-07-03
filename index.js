import { initGame } from "./data/data.js";
import { initGameRender } from "./render/main.js";
import { GlobalEvent } from "./events/global.js";

// will be usefull till game ends
const globalState = initGame();

initGameRender(initGame());
GlobalEvent();

export {globalState};

