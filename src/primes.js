function validateNumber(n) {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error("Please enter a whole number greater than 0");
  }
}

export function sieveOfEratosthenes(n) {
  // Start with a reasonable range and increase it if needed
  let limit = Math.max(20, n * 10);

  while (true) {
    const isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    // Cross out multiples of each prime number
    for (let number = 2; number * number <= limit; number++) {
      if (isPrime[number]) {
        for (
          let multiple = number * number;
          multiple <= limit;
          multiple += number
        ) {
          isPrime[multiple] = false;
        }
      }
    }

    const primes = [];

    for (let number = 2; number <= limit; number++) {
      if (isPrime[number]) {
        primes.push(number);
      }

      if (primes.length === n) {
        return primes;
      }
    }

    limit *= 2;
  }
}

export function generatePrimes(n, algorithm = sieveOfEratosthenes) {
  validateNumber(n);
  return algorithm(n);
}
