const grid2 = document.querySelector(".grid2");


grid2.style.maxWidth = "50vw";
grid2.style.display = "flex";
grid2.style.overflow = "hidden";
grid2.style.justifyContent = "center";
grid2.style.alignItems = "flex-end";
grid2.style.position = "relative";

const gridContainer = document.createElement("div");
gridContainer.style.display = "flex";
gridContainer.style.width = "70%";
gridContainer.style.justifyContent = "space-around";
gridContainer.style.gap = "20px";


const column1 = createNewDiv();
const column2 = createNewDiv();
const column3 = createNewDiv();

export {column1, column2, column3};


//task priority headings
function taskPriority(){
    const headings = document.createElement("div");
    return headings;
};

export default function displayOld(){
    //column1 creation and styling
    column1.style.height = "60vh";
    column1.style.width = "30vw";
    column1.style.backgroundColor = "white";

    const heading1 = taskPriority();
    heading1.style.backgroundColor = "blue";
    heading1.textContent = "PRIORITY LOW";
    heading1.style.textAlign = "center";
    heading1.style.marginBottom = "10px";
    heading1.style.color = "white";
    heading1.style.fontWeight = "bold";

    column1.appendChild(heading1);
    gridContainer.appendChild(column1);

    //column2 creation and styling
    column2.style.height = "60vh";
    column2.style.width = "30vw";
    column2.style.backgroundColor = "white";

    const heading2 = taskPriority();
    heading2.style.backgroundColor = "orange";
    heading2.textContent = "PRIORITY  MEDIUM";
    heading2.style.textAlign = "center";
    heading2.style.marginBottom = "10px";
    heading2.style.color = "black";
    heading2.style.fontWeight = "bold";

    column2.appendChild(heading2);
    gridContainer.appendChild(column2);

    //column3 creation and styling
    column3.style.height = "60vh";
    column3.style.width = "30vw";
    column3.style.backgroundColor = "white";

    const heading3 = taskPriority();
    heading3.style.backgroundColor = "RED";
    heading3.textContent = "PRIORITY HIGH";
    heading3.style.textAlign = "center";
    heading3.style.marginBottom = "10px";
    heading3.style.color = "black";
    heading3.style.fontWeight = "bold";

    column3.appendChild(heading3);
    gridContainer.appendChild(column3);

};

grid2.appendChild(gridContainer);

function createNewDiv(){
   return  document.createElement("div");
};

export {createNewDiv};
