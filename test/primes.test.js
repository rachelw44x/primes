import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { generatePrimes } from "../src/primes.js";

describe("generatePrimes", () => {
  it("returns the first prime", () => {
    assert.deepEqual(generatePrimes(1), [2]);
  });

  it("returns the first 3 primes", () => {
    assert.deepEqual(generatePrimes(3), [2, 3, 5]);
  });

  it("returns the first 10 primes", () => {
    assert.deepEqual(generatePrimes(10), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  it("throws an error for invalid input", () => {
    assert.throws(() => generatePrimes(0));
    assert.throws(() => generatePrimes(-1));
    assert.throws(() => generatePrimes(1.5));
  });

  it("works with a larger number of primes", () => {
    const primes = generatePrimes(1000);

    assert.equal(primes.length, 1000);
    assert.equal(primes[999], 7919);
  });

  it("can use a different prime algorithm", () => {
    const algorithm = () => [2, 3, 5];
    assert.deepEqual(generatePrimes(3, algorithm), [2, 3, 5]);
  });
});
