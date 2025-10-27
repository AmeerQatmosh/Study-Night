/* eslint-env mocha */
import { expect } from 'chai';
import { shuffle } from '../src/shuffle.js';

describe('shuffle function', () => {
  it('should shuffle the indexes of an array', () => {
    const original = [1, 2, 3, 4, 5];

    // permutation check: same items after shuffle
    const shuffledOnce = shuffle(original);
    expect([...shuffledOnce].sort()).to.deep.equal([...original].sort());

    // run multiple times so we don't fail when randomness returns same order
    let sawDifferentOrder = false;
    for (let i = 0; i < 5; i++) {
      const s = shuffle(original);
      const sameOrder = original.every((v, idx) => v === s[idx]);
      if (!sameOrder) {
        sawDifferentOrder = true;
        break;
      }
    }
    expect(sawDifferentOrder).to.be.true;
  });
});
