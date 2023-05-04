"use strict";


class Balance {
    domElement = document.createElement("div");

    /** 
     * @private
     * @type {Saver}
     */
    saver;
    /** 
     * @private
     * @type {number}
     */
    _value;
    get value() {
        return this._value;
    }
    set value(v) {
        this.displayDomElement.textContent = this.saver.value = this._value = v;
    }
    displayDomElement = document.createElement("span");

    constructor() {
        this.domElement.classList.add('Balance');

        this.saver = new Saver(`Balance.value`, 0);
        this.value = this.saver.value;


        this.displayDomElement.textContent = `${this.value} coin`;
        this.displayDomElement.classList.add('display');

        this.domElement.append(this.displayDomElement);
    }

}