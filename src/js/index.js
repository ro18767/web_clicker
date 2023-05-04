"use strict";



/**
 * @type {HTMLElement}
 */
let appDomElement = document.getElementById("app");


let game = new Game();
appDomElement.append(game.domElement)


