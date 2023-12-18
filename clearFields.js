
import {task, details, dueDate, priority, clearFields, enter} from './newTask.js';


export default function clearData(){

    clearFields.addEventListener("click", ()=> {
        console.log("clear");
    });
};