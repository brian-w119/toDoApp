
import defaultState from './defaultPage.js';
import newTask from './newTask.js';
import clearData from './clearFields.js';
import displayOld from './outstanding.js';
import sizeChange from './buttonsZoom.js';
import saveData from './captureData.js';
import {toDoRemove, reAssign, completedTask} from './processTasks.js';


defaultState();
newTask();
clearData();
displayOld();
sizeChange();
saveData();
toDoRemove();
reAssign();
completedTask();
