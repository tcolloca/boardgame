import * as random from 'random';

/**
 * A die.
 */
export class Die {
    private sides: number;

    /**
     * Creates a die with the number of `sides`.
     *
     * @param {number} sides Number of sides of the die.
     */
    constructor(sides: number = 6) {
      this.sides = sides;
    }

    /**
     * Rolls a die.
     *
     * @return {number} The rolled number.
     */
    public roll(): number {
      return random.int(1, this.sides);
    }
}
