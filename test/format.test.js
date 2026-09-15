import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createPrimeTable } from "../src/table.js";
import { formatTable } from "../src/format.js";

describe("formatTable", () => {
  it("formats the table correctly", () => {
    const output = formatTable(createPrimeTable([2, 3, 5]));

    assert.equal(
      output,
      [
        "|    |  2 |  3 |  5 |",
        "|  2 |  4 |  6 | 10 |",
        "|  3 |  6 |  9 | 15 |",
        "|  5 | 10 | 15 | 25 |",
      ].join("\n"),
    );
  });
});
