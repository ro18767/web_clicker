"use strict";


class LevelSelector {
    domElement = document.createElement("div");
    /** @private */
    lvlsdomElement = document.createElement("div");
    /** @private */
    lvlSaver = new Saver(`Game.lvl`, 0);
    /** @private */
    maxLvlSaver = new Saver(`Game.maxLvl`, 0);

    constructor() {
        this.domElement.classList.add('LevelSelector');


        this.domElement.append(this.lvlsdomElement);
        this.lvlsdomElement.classList.add('lvls');

        this.domElement.addEventListener('click', (event) => {
            if (!(event.target instanceof HTMLElement)) return;
            if (!event.target.matches('[data-lvl]')) return;
            this.lvlSaver.value = +event.target.dataset.lvl;
        });

        for (let i = 0; i <= this.maxLvlSaver.value; i++) {
            this.drawLvl(i);
        }
    }


    get lvl() {
        return this.lvlSaver.value;
    }

    /**
     * @private
     * @param {number} lvl 
     */
    drawLvl(lvl) {
        let lvlDomElement = document.createElement('div');
        lvlDomElement.textContent = lvl + 1;
        lvlDomElement.dataset.lvl = lvl;
        this.lvlsdomElement.append(lvlDomElement);
    }

    isMaxLvlvSelected() {
        return this.lvlSaver.value === this.maxLvlSaver.value;
    }
    unlockLvl() {
        this.drawLvl(++this.maxLvlSaver.value);
    }
}