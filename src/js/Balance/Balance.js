"use strict";


class Balance {
    domElement = document.createElement("div");
    
    balance_value = '123456789';
    balance_element = document.createElement("span");

    constructor() {
        this.domElement.classList.add('Balance');

        this.balance_element.textContent = this.balance_value;

        this.domElement.append(this.balance_element);
    }

}