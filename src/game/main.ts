// We need to set up the path alias manually so that ir works in js and ts.
import * as moduleAlias from 'module-alias';
import * as path from 'path';

moduleAlias.addAlias('@root', path.join(__dirname, '..'));
moduleAlias.addAlias('@genfiles', path.join(__dirname, '..', 'genfiles'));

import {Game} from '@root/game/game';
import {Dice} from '@root/game/util/dice';
import {Oball} from '@root/game/util/8ball';
import {Card} from '@genfiles/game/util/card_pb';

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

const oball = new Oball();
console.log(oball.ask('¿Hello world está pasado de moda?'));

const card = new Card();
card.setName('A card');
card.setDescription('This is indeed a card.');
console.log(card.toString());
