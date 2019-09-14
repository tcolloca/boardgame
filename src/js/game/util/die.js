"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random = require("random");
class Die {
    constructor(sides = 6) {
        this.sides = sides;
    }
    roll() {
        return random.int(1, this.sides + 1);
    }
}
exports.Die = Die;
//# sourceMappingURL=die.js.map