"use strict";


class Clicker {
    domElement = document.createElement("div");
    /** @private */
    clicksGameStatistic = new GameStatistic("Clicks", "clicks", 0);
    lvl = 0
    enemy = new Enemy(this.lvl);
    /**
     * 
     * @param {GameStatistics} gameStatistics 
     */
    constructor(gameStatistics) {
        this.domElement.classList.add('Clicker');
        gameStatistics.add(this.clicksGameStatistic);
        
        this.domElement.addEventListener("click", (_event) => {
            
            this.clicksGameStatistic.value++;
            
            this.enemy.dealDamage(1);
            

            console.log('asdfsdf', this.clicksGameStatistic.value, this.enemy.hp, this.enemy.isDead());

        });

        this.domElement.append(this.enemy.domElement)
        
    }
}