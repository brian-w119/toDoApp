
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


const column1 = createColumns();
const column2 = createColumns();
const column3 = createColumns();


export default function displayOld(){

    column1.style.height = "60vh";
    column1.style.width = "30vw";
    column1.style.backgroundColor = "white";
    gridContainer.appendChild(column1);

    column2.style.height = "60vh";
    column2.style.width = "30vw";
    column2.style.backgroundColor = "white";
    gridContainer.appendChild(column2);

    column3.style.height = "60vh";
    column3.style.width = "30vw";
    column3.style.backgroundColor = "white";
    gridContainer.appendChild(column3);

};

grid2.appendChild(gridContainer);

function createColumns(){
   return  document.createElement("div");
};