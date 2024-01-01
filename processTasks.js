
// this module creates the buttons that processes outstanding tasks


import {column1, column2, column3, createNewDiv} from './outstanding.js';

function creatNewButton(){
      let button = document.createElement("button");
      return button;
};

const deleteToDo = creatNewButton();
const changePriority = creatNewButton();
const complete = creatNewButton();
const newContainer = createNewDiv(); // container to hold buttons

function toDoRemove(){
    deleteToDo.style.width = "50px";
    deleteToDo.style.height = "20px";
    deleteToDo.style.fontSize = "10px";
    deleteToDo.style.marginLeft = "5px";
    deleteToDo.style.marginRight = "5px"
    //deleteToDo.style.textAlign = "centre";
    deleteToDo.textContent = "DELETE";
    newContainer.appendChild(deleteToDo);
    return newContainer;
};


function reAssign(){
    changePriority.style.width = "45px";
    changePriority.style.height = "35px";
    changePriority.style.fontSize = "10px";
    changePriority.style.marginLeft = "5px";
    changePriority.style.marginRight = "5px";
    changePriority.style.textAlign = "centre";
    changePriority.textContent = "Change Priority";
    newContainer.appendChild(changePriority);
    return newContainer;
};

function completedTask(){
    complete.style.width = "60px";
    complete.style.height = "35px";
    complete.style.fontSize = "10px";
    complete.style.textAlign = "centre";
    complete.textContent = "Task Completed";
    newContainer.appendChild(complete);
    return newContainer;
};



export {toDoRemove, reAssign, completedTask};

