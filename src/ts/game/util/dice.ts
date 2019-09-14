import { Die } from "./die";

export class Dice {

    private dice: Die[];

    constructor(...sides: number[]) {
        this.dice = sides.map(side => new Die(side));
    }

    roll(): number[] {
        return this.dice.map(die => die.roll());
    }
}