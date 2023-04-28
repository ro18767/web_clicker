"use strict";


class Enemy {
    domElement = document.createElement("div");
    // imageElement = new Image();
    imageElement = document.createElement("span");
    hpElement = document.createElement("span");
    /** @type {number} */
    hp;
    /** @type {number} */
    fullHp;
    name = 'Slime';
    constructor(lvl = 0) {
        this.fullHp = this.hp = Math.round((lvl * 15 + 10) * Math.pow(1.2, Math.floor(lvl / 2)));
        this.domElement.classList.add('Enemy');


        // this.imageElement.src = '/image/slime.png'
        this.imageElement.textContent = this.name;
        this.domElement.append(this.imageElement);

        this.hpElement.textContent = `${this.hp}/${this.fullHp}`;
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
        this.hpElement.textContent = `${this.hp}/${this.fullHp}`;
    }
}