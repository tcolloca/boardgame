import {Game} from './game/game';
import {Dice} from './game/util/dice';
import {Oball} from './game/util/8ball'; 

/**
 * A Main class to test progress.
 */
class Main {
  /**
  * Runs an example.
  */
  public run(): void {
    new Game().test('Hello world!');
  }
}

const main = new Main();
main.run();

const dice = new Dice(2, 5, 6);
console.log(dice.roll());

const oball = new Oball()
console.log(oball.ask("¿Hello world está pasado de moda?"))