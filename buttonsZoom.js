

import {enter, clearFields} from './newTask.js';
import { createTask } from './defaultPage.js';

const buttons = [enter, clearFields, createTask];

export default function sizeChange(){

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("mouseover", () => {
            buttons[i].style.transform = "scale(1.1)";
        });
        buttons[i].addEventListener("mouseout", () => {
            buttons[i].style.transform = "scale(1)";
        });
    };
};
 


