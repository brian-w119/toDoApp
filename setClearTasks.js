import {grid1} from './defaultPage.js';

export default function acceptResetData(){
    
    const enter = document.createElement("button");
    enter.addEventListener("click", ()=> {

        enter.style.display = "block";
        enter.style.height  = "120px";
        enter.style.color   = "white";
        enter.textContent   = "Enter";
        enter.style.backgroundColor = "green";
        grid1.appendChild(enter);
    });
};