
import {clearFields, enter, task} from './newTask.js';

const buttons = [enter, task. clearFields];

export default function zoom(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("mouseover", ()=> {
            buttons[i].style.transform = "scale(1.3)";
        });
    };
};

