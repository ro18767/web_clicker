"use strict";


class GameStatistic {
    domElement = document.createElement("div");
    /** @private */
    titleDomElement = document.createElement("span");
    /** @private */
    valuedomElement = document.createElement("span");
    title;
    code;
    /** @private */
    _value;
    get value() {
        return this._value;
    }
    set value(v) {
        this.valuedomElement.textContent = this._value = v;
    }
    constructor(title = "", code = "", value = 0) {
        this.title = title;
        this.code = code;
        this._value = value;
        this.domElement.classList.add('GameStatistic');

        this.titleDomElement.classList.add('title');
        this.titleDomElement.textContent = title;
        this.domElement.append(this.titleDomElement);

        this.valuedomElement.textContent = value;
        this.valuedomElement.classList.add('value');
        this.domElement.append(this.valuedomElement);
    }
}