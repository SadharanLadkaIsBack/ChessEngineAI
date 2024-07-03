import { root_div } from "../helper/constants.js";
import { globalState } from "../index.js";
function GlobalEvent(){
    root_div.addEventListener("click", function(event){
        if(event.target.localName === "img"){
            const clickedId = event.target.parentNode.id;
            const flatArray = globalState.flat();
            const square = flatArray.find(el => el.id == clickedId);
        }
    });

}


export {GlobalEvent};