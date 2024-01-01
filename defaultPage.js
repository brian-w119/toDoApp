
export const grid1 = document.querySelector(".grid1");

export let createTask = document.createElement("button");

export default function defaultState(){
    
    createTask.id = "createNewToDo";
    createTask.style.width = "120px";
    createTask.style.height = "40px";
    createTask.style.backgroundColor = "blue";
    createTask.style.color = "white";
    createTask.textContent = "+ New Task";
    createTask.style.marginTop = "10px";
   // const grid1 = document.querySelector(".grid1");
    grid1.appendChild(createTask);

    const grid2 = document.querySelector(".grid2");
    const outstanding = document.createElement("h2");
    outstanding.textContent = "OUTSTANDING";
    outstanding.style.position = "absolute";
    outstanding.style.top = "0px";
    outstanding.style.justifyContent = "center";
    outstanding.style.color = "white";
    grid2.appendChild(outstanding);
};