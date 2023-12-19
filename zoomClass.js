
export default class Buttons {
    constructor(button){
        this.button = button;
    };

    buttonResize(){
        this.button.addEventListener("mouseover", () => {
            this.button.style.transform = "scale(1.1)";
        });

        this.button.addEventListener("mouseout", () => {
            this.button.style.transform = "scale(1)";
        });
    };

};

