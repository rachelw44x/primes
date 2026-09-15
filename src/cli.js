import { generatePrimes } from "./primes.js";
import { createPrimeTable } from "./table.js";
import { formatTable } from "./format.js";

const n = Number(process.argv[2]);

try {
  const primes = generatePrimes(n);
  const table = createPrimeTable(primes);

  console.log(formatTable(table));
} catch (error) {
  console.error(error.message);
  console.error("Usage: npm start -- <number>");
  process.exitCode = 1;
}
