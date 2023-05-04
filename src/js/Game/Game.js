"use strict";


class Game {
    domElement = document.createElement("div");
    /** @private */
    balance = new Balance();
    /** @private */
    damage = {
        DPC: 0,
        DPS: 0,
    };
    /** @private */
    store = new Store(this.balance, this.damage);
    /** @private */
    gameStatistics = new GameStatistics();
    /** @private */
    clicksGameStatistic = new GameStatistic("Clicks", "clicks", 0);
    /** @private */
    killsGameStatistic = new GameStatistic("Kills", "kills", 0);
    /** @private */
    clickerDomElement = document.createElement("div");
    /** @private */
    levelSelector = new LevelSelector();
    /** @private */
    enemy = new Enemy(this.levelSelector.lvl);
    /** 
     * @private
     * @type {number?}
     */
    deadtime;

    constructor() {
        this.domElement.classList.add('Game');

        this.domElement.append(this.balance.domElement);

        this.domElement.append(this.clickerDomElement);
        this.clickerDomElement.classList.add('clicker');

        this.domElement.append(this.store.domElement);

        this.gameStatistics.add(this.clicksGameStatistic);
        this.gameStatistics.add(this.killsGameStatistic);

        this.clickerDomElement.append(this.enemy.domElement);
        this.domElement.append(this.gameStatistics.domElement);


        this.domElement.append(this.levelSelector.domElement);


        this.clickerDomElement.addEventListener("click", (_event) => {
            if (this.enemy.isDead()) return;
            this.clicksGameStatistic.value++;

            this.enemy.dealDamage(1 + this.damage.DPC);

            console.log('asdfsdf', this.clicksGameStatistic.value, this.enemy.hp, this.enemy.isDead());

            if (!this.enemy.isDead()) return;

            this.killsGameStatistic.value++;
            this.deadtime = Date.now();
            this.balance.value += Math.ceil(this.enemy.fullHp / 15);

            if (this.levelSelector.isMaxLvlvSelected()) this.levelSelector.unlockLvl();
        });

        {
            let scope = this;

            let lastUpdateTime = Date.now();
            const animationloop = () => {
                window.requestAnimationFrame(animationloop);
                // console.log(this.levelSelector.lvl, this.enemy.lvl);
                if (this.levelSelector.lvl !== this.enemy.lvl) this.changeEnemy();

                {
                    let currentTime = Date.now();
                    let daltaTime = currentTime - lastUpdateTime;
                    lastUpdateTime = currentTime;

                    this.enemy.dealDamage(this.damage.DPS * daltaTime / 1000);
                }

                scope.updateEnemy();
            };
            animationloop();
        }
    }

    updateEnemy() {
        if (!this.enemy.isDead()) if (this.levelSelector.lvl !== this.enemy.lvl) this.changeEnemy();
        if (this.deadtime == null) return;
        if (Date.now() - this.deadtime < 1000) return;

        this.deadtime = null;

        this.changeEnemy();
    }
    changeEnemy() {
        this.enemy.domElement.remove();
        this.enemy = new Enemy(this.levelSelector.lvl);
        this.clickerDomElement.append(this.enemy.domElement);
    }
}