"use strict";



/**
 * @type {HTMLElement}
 */
let appDomElement = document.getElementById("app");


let game = new Game();
appDomElement.append(game.domElement)


let audioSetting = new AudioSetting();


appDomElement.append(audioSetting.domElement)

