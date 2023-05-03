"use strict";


class Saver {
    /** @private */
    _code;
    /** @private */
    _value;
    get value() {
        return this._value;
    }
    set value(v) {
        this._value = v;
        window.localStorage.setItem(this._code, v);
    }
    constructor(code = "", value = 0) {
        this._code = code;
        let v = window.localStorage.getItem(code) ?? JSON.stringify(value);
        this.value = JSON.parse(v);
    }

}