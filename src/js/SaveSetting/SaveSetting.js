"use strict";


class SaveSetting {
    domElement = document.createElement("div");

    constructor() {
        this.domElement.classList.add('SaveSetting');

        let button = document.createElement('button');
        button.textContent = "reset";
        this.domElement.append(button);

        button.addEventListener('click', (event) => {
            if (!window.confirm("Are you sure you want to delete the save?")) return;
            this.resetSave();
            window.location.href = window.location.href;
        });
    }
    resetSave() {
        window.localStorage.clear();
    }
}