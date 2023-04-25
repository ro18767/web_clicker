"use strict";


class Clicker {
    domElement = document.createElement("div");
    /** @private */
    clicksGameStatistic = new GameStatistic("Clicks", "clicks", 0);
    /**
     * 
     * @param {GameStatistics} gameStatistics 
     */
    constructor(gameStatistics) {
        this.domElement.classList.add('Clicker');
        gameStatistics.add(this.clicksGameStatistic);
        this.domElement.addEventListener("click", (_event) => {
            console.log('asdfsdf', this.clicksGameStatistic.value);
            this.clicksGameStatistic.value++;
        });
    }
}