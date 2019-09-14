import * as random from 'random';

export class Die {
    private sides: number;

    constructor(sides: number = 6) {
        this.sides = sides;
    }

    public roll(): number {
        return random.int(1, this.sides);
    }
}