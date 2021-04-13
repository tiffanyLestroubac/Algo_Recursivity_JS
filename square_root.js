// Return the square root of a number
// Using the Babylonian method https://en.wikipedia.org/wiki/Methods_of_computing_square_roots
const computeSquareRoot = (n, guess = n / 2.0) => {
  if (n < 0) return 0;
  if (guess ** 2 === n) return guess;
  const newGuess = ((n / guess) + guess) / 2;
  return computeSquareRoot(n, newGuess);
};

console.log(computeSquareRoot(25));
console.log(computeSquareRoot(42));
console.log(computeSquareRoot(100));
console.log(computeSquareRoot(0));
console.log(computeSquareRoot(-5));
