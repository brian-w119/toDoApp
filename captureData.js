//this module captures data from input fields

import {task, details, dueDate, priority, clearFields, enter} from "./newTask.js";
import {column1, column2, column3} from "./outstanding.js";
import { createNewDiv } from "./outstanding.js";
import {toDoRemove, reAssign, completedTask} from './processTasks.js';

let newData;

const dataFields = [task, details, dueDate];

let columnN;



export default function saveData(){

    enter.addEventListener("click", ()=> {
        for(let i = 0; i < dataFields.length; i++){
            let newDiv = createNewDiv();
            newDiv.style.marginLeft = "5px";
            newDiv.style.marginRight = "5px";

            if(dataFields[i] === task){
                newDiv.style.marginTop = "6px";
            };
            
            if(dataFields[i] === dueDate){
                newDiv.textContent =  `Due date : ${dataFields[i].value}`;
            }else{
                newDiv.textContent =   dataFields[i].value;
            };
            newDiv.style.backgroundColor = "brown";
            whichPriority().appendChild(newDiv);
        };
    });
};

//function that assigns a number to N
function whichPriority(){
    
    let taskPriority = priority.value.toUpperCase();

    if(taskPriority === "LOW"){
        columnN = column1;

    }else if(taskPriority === "MEDIUM"){
        columnN = column2;

    }else if(taskPriority === "HIGH"){
        columnN = column3;
    };

    columnN.append(toDoRemove()); //attaches button container to the column
    return columnN;
};