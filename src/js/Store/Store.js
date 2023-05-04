"use strict";


class Store {
    /** @private */
    static upgradeInfoArr = [
        {
            name: "Damage Per Click",
            code: "hero.click.0",
            basePrice: 5,
            baseDPC: 1,
            baseDPS: 0,
        },
        {
            name: "Damage Per Second 1",
            code: "hero.dps.0",
            basePrice: 50,
            baseDPC: 0,
            baseDPS: 5,
        },
        {
            name: "Damage Per Second 2",
            code: "hero.dps.1",
            basePrice: 250,
            baseDPC: 0,
            baseDPS: 22,
        },
        {
            name: "Damage Per Second 3",
            code: "hero.dps.2",
            basePrice: 1000,
            baseDPC: 0,
            baseDPS: 74,
        },
    ];
    domElement = document.createElement("div");
    upgradesDomElement = document.createElement("div");
    /** @type {Balance} */
    balance;
    /**
     * @param {Balance} balance 
     */
    upgrades = [];
    constructor(balance, damage) {
        this.damage = damage;
        this.balance = balance;
        this.domElement.classList.add('Store');

        this.upgradesDomElement.classList.add('upgrades');

        this.domElement.append(this.upgradesDomElement);

        Store.upgradeInfoArr.forEach((upgradeInfo, i) => this.drawUpgrade(upgradeInfo, i));

        this.updateDamage();

    }
    drawUpgrade(upgradeInfo, i) {
        if (upgradeInfo == null) return;
        let lvlSaver = new Saver(`Store.${upgradeInfo.code}.lvl`, 0);

        let upgradeDomElement = document.createElement("div");

        upgradeDomElement.classList.add('upgrade');

        let nameDomElement = document.createElement("span");
        nameDomElement.textContent = `lvl ${lvlSaver.value}. ${upgradeInfo.name}`;

        this.upgrades[i] = {
            lvlSaver
        };

        let buttonDomElement = document.createElement("button");
        buttonDomElement.textContent = `${priceCalculator(lvlSaver.value)} coin`;
        buttonDomElement.addEventListener('click', (_e) => {
            if (priceCalculator(lvlSaver.value) > this.balance.value) return;
            this.balance.value -= priceCalculator(lvlSaver.value);
            lvlSaver.value++;
            nameDomElement.textContent = `lvl ${lvlSaver.value}. ${upgradeInfo.name}`;
            buttonDomElement.textContent = `${priceCalculator(lvlSaver.value)} coin`;

            this.updateDamage();
        });

        upgradeDomElement.append(buttonDomElement, nameDomElement);

        this.upgradesDomElement.append(upgradeDomElement);

        function priceCalculator(lvl = 0) {
            return Math.floor(upgradeInfo.basePrice * Math.pow(1.07, lvl));
        };
    }
    updateDamage() {
        {
            this.damage.DPC = 0;
            this.damage.DPS = 0;
        }
        Store.upgradeInfoArr.forEach((upgradeInfo, i) => {
            let lvl = this.upgrades[i].lvlSaver.value;
            this.damage.DPC += upgradeInfo.baseDPC * lvl;
            this.damage.DPS += upgradeInfo.baseDPS * lvl;
        });
    }

}