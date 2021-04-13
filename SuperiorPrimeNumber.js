// Return true if number is a prime number, else otherwise
const isPrimeNumber = (n, divisor = n-2) => {
  if (n < 2) return 0;
  if (n === 2 || divisor === 1) return true;
  if (n % 2 === 0 || n % divisor === 0) return false;
  return isPrimeNumber(n, divisor - 2);
}

// Find the first prime number superior to the number given
const findSupPrime = (n) => {
  if (isPrimeNumber(n)) return n;
  return findSupPrime(n + 1);
}

console.log(findSupPrime(-1));
console.log(findSupPrime(0));
console.log(findSupPrime(3));
console.log(findSupPrime(50));
console.log(findSupPrime(51));
console.log(findSupPrime(13));
console.log(findSupPrime(43));
console.log(findSupPrime(2));
