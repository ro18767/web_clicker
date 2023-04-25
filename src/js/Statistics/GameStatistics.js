"use strict";


class GameStatistics {
    domElement = document.createElement("div");
    /** 
     * @private
     * @type {GameStatistic[]} */
    statistics = [];

    /**
     * @param {GameStatistic} gameStatistic 
     */
    add(gameStatistic) {
        this.statistics.push(gameStatistic);
        this.domElement.append(gameStatistic.domElement);
    }
    constructor() {
        this.domElement.classList.add('GameStatistics');
    }

}