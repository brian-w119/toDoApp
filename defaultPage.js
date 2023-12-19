

export const grid1 = document.querySelector(".grid1");

export default function defaultState(){

    const newTask = document.createElement("button");
    newTask.id = "createNewToDo";
    newTask.style.width = "120px";
    newTask.style.height = "40px";
    newTask.style.backgroundColor = "blue";
    newTask.style.color = "white";
    newTask.textContent = "+ New Task";
    newTask.style.marginTop = "10px";
   // const grid1 = document.querySelector(".grid1");
    grid1.appendChild(newTask);

    const grid2 = document.querySelector(".grid2");
    const outstanding = document.createElement("h2");
    outstanding.textContent = "OUTSTANDING";
    outstanding.style.position = "absolute";
    outstanding.style.top = "0px";
    outstanding.style.justifyContent = "center";
    outstanding.style.color = "white";
    grid2.appendChild(outstanding);
};

//export {grid1};







