import {Die} from '@game/util/die';

/**
 * A set of dice.
 */
export class Dice {
  private dice: Die[];

  /**
   * Creates a set of dice with the given sides.
   *
   * @param {number[]} sides Sides of the dice.
   */
  constructor(...sides: number[]) {
    this.dice = sides.map((side) => new Die(side));
  }

  /**
   * Rolls all the dice.
   *
   * @return {number[]} The rolled numbers.
   */
  roll(): number[] {
    return this.dice.map((die) => die.roll());
  }
}
