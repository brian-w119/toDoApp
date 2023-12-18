
import defaultState from './defaultPage.js';
import {grid1} from './defaultPage.js';

export default function newTask(){

    const createTask = document.querySelector("#createNewToDo");
    createTask.addEventListener("click", ()=> {
        
        
        const task = createField();
        task.type = "text";
        task.name = "text";
        task.placeholder = "Title";
        task.style.display = "block";
        task.style.marginTop = "10px";
        task.size = "30";
        grid1.appendChild(task);

        const details = createField();
        details.type  = "text";
        details.name = "text";
        details.placeholder = "Enter Details";
        details.style.display = "block";
        details.style.marginTop = "30px";
        details.style.width = "500px";
        details.style.height = "50px";
        details.maxLength = "100";
        details.style.wordBreak = "break-word";
        grid1.appendChild(details);

    });
};

function createField(){
    return document.createElement("input");
};