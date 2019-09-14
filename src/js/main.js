"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./game/game");
const dice_1 = require("./game/util/dice");
class Main {
    run() {
        new game_1.Game().test("Hello world!");
    }
}
let main = new Main();
main.run();
let dice = new dice_1.Dice(2, 5, 6);
console.log(dice.roll());
//# sourceMappingURL=main.js.map