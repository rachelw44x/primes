export function createPrimeTable(primes) {
  const table = [["", ...primes]];

  for (const rowPrime of primes) {
    const row = [rowPrime];

    for (const colPrime of primes) {
      row.push(rowPrime * colPrime);
    }

    table.push(row);
  }

  return table;
}
