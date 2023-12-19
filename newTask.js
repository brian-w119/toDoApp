
import defaultState from './defaultPage.js';
import {grid1} from './defaultPage.js';

const task = createField();
const details = createField();
const dueDate = createField();
const priority = createField();
const clearFields = document.createElement("button");
const enter = document.createElement("button");


export{task, details, dueDate, priority, clearFields, enter};

export default function newTask(){
    
    const createTask = document.querySelector("#createNewToDo");
    createTask.addEventListener("click", ()=> {

        //div to hold the input fields
        const inputDiv = document.createElement("div");
        inputDiv.style.marginTop = "60px";
        
        //creation and styling of TITLE field
        task.type = "text";
        task.name = "title";
        task.size = "30";
        task.placeholder   = "Title";
        task.style.display = "block";
        task.style.textAlign = "center";
        inputDiv.appendChild(task);

        //creation and styling of DETAILS field
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
        inputDiv.appendChild(details);
        
        //creation and styling of DUE DATE field
        dueDate.type  = "date";
        dueDate.name  = "date";
        dueDate.width = "50px";
        dueDate.style.marginTop = "30px";
        inputDiv.appendChild(dueDate);
        
        //creation and styling of PRIORITY field
        priority.type  = "text";
        priority.name  = "priority";
        priority.width = "50px";
        priority.style.display = "block";
        priority.style.textAlign = "center";
        priority.style.marginTop = "30px";
        priority.placeholder = "Low / Medium / High";
        inputDiv.appendChild(priority);

        grid1.appendChild(inputDiv);

        //div to house ENTER and CLEAR buttons
        const container = document.createElement("div");
        
        //creation and styling of ENTER button
        enter.style.height  = "60px";
        enter.style.color   = "white";
        enter.textContent   = "Enter";
        enter.style.marginTop = "60px";
        enter.style.backgroundColor = "green";
        container.appendChild(enter);

        //creation and styling of CLEAR button
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