# Primes multiplication table

This takes a whole number `N` and prints out a multiplication table using the first `N` prime numbers.

## How to run

You need Node 18 or later. There arent any external packages so you dont need to run `npm install`.

```bash
npm start -- 3
```

That would give:

```text
|    |  2 |  3 |  5 |
|  2 |  4 |  6 | 10 |
|  3 |  6 |  9 | 15 |
|  5 | 10 | 15 | 25 |
```

You can just swap `3` for another whole number above 0.

## Tests

To run the tests:

```bash
npm test
```

## What I'm pleased with

By splitting the prime number generation, table and formatting into different files, it made the task a lot more manageable. It also meant I could test each part on its own.

After looking at the different prime generation algorithms online, I thought going for one of the simpler approaches made the most sense as it was easy to understand and meant I could get started quickly.

By keeping the prime generation seperate from the rest of the app, another algorithm could also be passed in later without needing to change the table or formatting code.

## What I would do with more time

Comparing performance changes with larger values of `N` so I can see what differs between the different prime generation algorithms.

I would also improve the UI by turning it into a simple single-page web app, where the user could enter a number and generate the table in the browser instead of using the command line.
