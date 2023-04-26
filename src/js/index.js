"use strict";



/**
 * @type {HTMLElement}
 */
let appDomElement = document.getElementById("app");
let gameStatistics = new GameStatistics();
appDomElement.append(gameStatistics.domElement);

let clicker = new Clicker(gameStatistics);
appDomElement.append(clicker.domElement)


let soundSetting = new SoundSetting();


appDomElement.append(soundSetting.domElement)
