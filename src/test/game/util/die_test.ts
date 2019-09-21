import 'module-alias/register';

import {expect} from 'chai';
import {Die} from '@root/game/util/die';

// Number of attempts to run the random tests.
const attempts = 100;

describe('Die', () => {
  it('should default to a 6-sided die if `sides` is not set.', () => {
    const die = new Die();
    Array.from(Array(attempts).keys())
        .map((unused) => die.roll())
        .forEach((roll) => {
          expect(roll).to.be.at.least(1);
          expect(roll).to.be.at.most(6);
        });
  });

  it('should roll between 1 and number of sides.', () => {
    for (let sides = 1; sides <= 10; sides++) {
      const die = new Die(sides);
      Array.from(Array(attempts / 10).keys())
          .map((unused) => die.roll())
          .forEach((roll) => {
            expect(roll).to.be.at.least(1);
            expect(roll).to.be.at.most(sides);
          });
    }
  });
});
