import {Game} from './game/game';
import {Dice} from './game/util/dice';

/**
 * A Main class to test progress.
 */
class Main {
  /**
   * Runs an example.
   */
  run(): void {
    new Game().test('Hello world!');
  }
}

const main = new Main();
main.run();

const dice = new Dice(2, 5, 6);
console.log(dice.roll());
