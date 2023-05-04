"use strict";


class Enemy {
    domElement = document.createElement("div");
    // imageElement = new Image();
    imageElement = document.createElement("span");
    hpElement = document.createElement("span");
    /**
     * @private 
     * @type {number}
     */
    hp;
    /**
     * @private 
     * @type {number}
     */
    _fullHp;
    get fullHp() {
        return this._fullHp;
    }
    /** @private */
    _lvl;
    get lvl() {
        return this._lvl;
    }
    name = 'Slime';
    constructor(lvl = 0) {

        this._lvl = lvl;
        this._fullHp = this.hp = Math.round(10 * (lvl + Math.pow(1.55, lvl)));
        this.domElement.classList.add('Enemy');


        // this.imageElement.src = '/image/slime.png'
        this.imageElement.textContent = this.name;
        this.domElement.append(this.imageElement);

        this.hpElement.textContent = `${this.hp}/${this._fullHp}`;
        this.domElement.append(this.hpElement);
    }
    isDead() {
        let result = this.hp <= 0;
        if (result) this.imageElement.textContent = `Dead ${this.name}`;
        return result;
    }
    /**
     * @param {number} damage 
     */
    dealDamage(damage) {
        this.hp -= damage;
        this.hp = Math.max(this.hp, 0);
        this.hpElement.textContent = `${Math.ceil(this.hp)}/${this._fullHp}`;
    }
}