import { Game } from "./game/game";
import { Dice } from "./game/util/dice";

class Main {

    public run(): void {
        new Game().test("Hello world!");
    }
}

let main = new Main();
main.run();

let dice = new Dice(2, 5, 6);
console.log(dice.roll());