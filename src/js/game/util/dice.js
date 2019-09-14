"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const die_1 = require("./die");
class Dice {
    constructor(...sides) {
        this.dice = sides.map(side => new die_1.Die(side));
    }
    roll() {
        return this.dice.map(die => die.roll());
    }
}
exports.Dice = Dice;
//# sourceMappingURL=dice.js.map