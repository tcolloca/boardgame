"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./game/game");
const die_1 = require("./game/util/die");
class Main {
    run() {
        new game_1.Game().test("Hello world!");
    }
}
let main = new Main();
main.run();
let die = new die_1.Die();
console.log(die.roll());
let die2sided = new die_1.Die(2);
console.log(die2sided.roll());
//# sourceMappingURL=main.js.map