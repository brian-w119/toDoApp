
import Buttons from './zoomClass.js';

export default function buttonHover(){
    const eachButton = document.querySelectorAll("button");
    for(const button of eachButton){
        const btn = new Buttons(button);
        btn.buttonResize();
    };

};




