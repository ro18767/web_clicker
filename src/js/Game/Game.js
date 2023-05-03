"use strict";


class Game {
    domElement = document.createElement("div");
    /** @private */
    balance = new Balance();
    /** @private */
    gameStatistics = new GameStatistics();
    /** @private */
    clickerDomElement = document.createElement("div");
    /** @private */
    clicksGameStatistic = new GameStatistic("Clicks", "clicks", 0);
    /** @private */
    killsGameStatistic = new GameStatistic("Kills", "kills", 0);
    /** @private */
    lvl = 0;
    /** @private */
    enemy = new Enemy(this.lvl);
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

        this.domElement.append(this.gameStatistics.domElement);
        this.clickerDomElement.append(this.enemy.domElement);

        this.gameStatistics.add(this.clicksGameStatistic);
        this.gameStatistics.add(this.killsGameStatistic);

        this.clickerDomElement.addEventListener("click", (_event) => {
            if (this.enemy.isDead()) return;
            this.clicksGameStatistic.value++;

            this.enemy.dealDamage(1);


            console.log('asdfsdf', this.clicksGameStatistic.value, this.enemy.hp, this.enemy.isDead());

        });

        


        let scope = this;

        const animationloop = () => {
            window.requestAnimationFrame(animationloop);
            scope.updateEnemy();
        };
        animationloop();
    }

    updateEnemy() {
        if (!this.enemy.isDead()) return;
        if (this.deadtime == null) this.killsGameStatistic.value++;
        this.deadtime ??= Date.now();

        if (this.deadtime == null) return;
        if (Date.now() - this.deadtime < 1000) return;

        this.enemy.domElement.remove();
        this.enemy = new Enemy(this.lvl);
        this.enemy.domElement.remove();
        this.deadtime = null;

        console.log('new Enemy', this.lvl);
        this.enemy = new Enemy(this.lvl);
        this.clickerDomElement.append(this.enemy.domElement);
    }
}