
import defaultState from './defaultPage.js';
import {grid1} from './defaultPage.js';

export default function newTask(){
    
    const createTask = document.querySelector("#createNewToDo");
    createTask.addEventListener("click", ()=> {
        
        //creation and styling of TITLE field
        const task = createField();
        task.type = "text";
        task.name = "task";
        task.size = "30";
        task.placeholder   = "Title";
        task.style.display = "block";
        task.style.marginTop = "10vw";
        task.style.textAlign = "center";
        grid1.appendChild(task);

        //creation and styling of DETAILS field
        const details = createField();
        details.type  = "text";
        details.name  = "details";
        details.placeholder   = "Enter Details";
        details.style.display = "block";
        details.style.marginTop = "30px";
        details.style.height = "50px";
        details.style.maxWidth  = "500px";
        details.style.width  = "300px";
        details.style.height = "50px";
        details.maxLength    = "100";
        details.style.textAlign = "center";
        details.style.wordBreak = "break-word";
        grid1.appendChild(details);
        
        //creation and styling of DUE DATE field
        const dueDate = createField();
        dueDate.type  = "date";
        dueDate.name  = "date";
        dueDate.width = "50px";
        dueDate.style.marginTop = "30px";
        grid1.appendChild(dueDate);
        
        //creation and styling of PRIORITY field
        const priority = createField();
        priority.type  = "text";
        priority.name  = "priority";
        priority.width = "50px";
        priority.style.display = "block";
        priority.style.textAlign = "center";
        priority.style.marginTop = "30px";
        priority.placeholder = "Low / Medium / High";
        grid1.appendChild(priority);

        //div to house ENTER and CLEAR buttons
        const container = document.createElement("div");
        
        //creation and styling of ENTER button
        const enter = document.createElement("button");
        enter.style.height  = "60px";
        enter.style.color   = "white";
        enter.textContent   = "Enter";
        enter.style.marginTop = "60px";
        enter.style.backgroundColor = "green";
        container.appendChild(enter);

        //creation and styling of CLEAR button
        const clearFields = document.createElement("button");
        clearFields.style.height  = "60px";
        clearFields.style.color   = "white";
        clearFields.textContent   = "Clear";
        clearFields.style.marginTop = "60px";
        clearFields.style.backgroundColor = "green";
        container.appendChild(clearFields);

        container.style.marginTop = "80px";
        container.style.display = "flex";
        container.style.justifyContent = "space-evenly";
        grid1.appendChild(container);
    });
};

function createField(){
    return document.createElement("input");
};