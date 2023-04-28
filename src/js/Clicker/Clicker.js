"use strict";


class Clicker {
    domElement = document.createElement("div");
    /** @private */
    clicksGameStatistic = new GameStatistic("Clicks", "clicks", 0);
    killsGameStatistic = new GameStatistic("Kills", "kills", 0);
    lvl = 0;
    enemy = new Enemy(this.lvl);
    /** 
     * @private
     * @type {number?}
     */
    deadtime;

    /**
     * 
     * @param {GameStatistics} gameStatistics 
     */
    constructor(gameStatistics) {
        this.domElement.classList.add('Clicker');
        gameStatistics.add(this.clicksGameStatistic);
        gameStatistics.add(this.killsGameStatistic);

        this.domElement.addEventListener("click", (_event) => {
            if (this.enemy.isDead()) return;
            this.clicksGameStatistic.value++;

            this.enemy.dealDamage(1);


            console.log('asdfsdf', this.clicksGameStatistic.value, this.enemy.hp, this.enemy.isDead());

        });

        this.domElement.append(this.enemy.domElement);


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
        this.domElement.append(this.enemy.domElement);
    }
}