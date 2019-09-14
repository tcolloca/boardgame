import { Game } from "./game/game";
import { Die } from "./game/util/die";

class Main {

  public run(): void {
    new Game().test("Hello world!");
  }	
}

let main = new Main();
main.run();

let die = new Die();
console.log(die.roll());
let die2sided = new Die(2);
console.log(die2sided.roll());
