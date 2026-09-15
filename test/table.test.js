import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createPrimeTable } from "../src/table.js";

describe("createPrimeTable", () => {
  it("builds the table for 2, 3 and 5", () => {
    assert.deepEqual(createPrimeTable([2, 3, 5]), [
      ["", 2, 3, 5],
      [2, 4, 6, 10],
      [3, 6, 9, 15],
      [5, 10, 15, 25],
    ]);
  });

  it("works with one prime", () => {
    assert.deepEqual(createPrimeTable([2]), [
      ["", 2],
      [2, 4],
    ]);
  });
});
