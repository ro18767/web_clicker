"use strict";


class Enemy {
    domElement = document.createElement("div");
    // imageElement = new Image();
    imageElement = document.createElement("span");
    /** @type {number} */
    hp;
    constructor(lvl = 0) {
        this.hp = Math.round((lvl * 15 + 10) * Math.pow(1.2, Math.floor(lvl / 2)));
        this.domElement.classList.add('Enemy');


        // this.imageElement.src = '/image/slime.png'
        this.imageElement.textContent = 'Slime';
        this.domElement.append(this.imageElement);
    }
    isDead() {
        return this.hp > 0;
    }
    /**
     * @param {number} damage 
     */
    dealDamage(damage) {
        this.hp -= damage;
    }
}