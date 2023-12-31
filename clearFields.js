

import * as newTask from './newTask.js';

export default function clearData() {
    newTask.clearFields.addEventListener("click", () => {
        console.log("clear!!!!");
        newTask.task.value     = "";
        newTask.details.value  = "";
        newTask.dueDate.value  = "";
        newTask.priority.value = "";
    });
}; 