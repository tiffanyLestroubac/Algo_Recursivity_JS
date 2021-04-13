// Factorial with iterative method
const computeFactorialIt = (n) => {
  if (n < 0) return 0;
  if (n === 0) return 1;
  result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(computeFactorialIt(-1));
console.log(computeFactorialIt(0));
console.log(computeFactorialIt(5));

// Factorial with recursive method
const computeFactorialRec = (n) => {
  if (n < 0) return 0;
  if (n === 0) return 1;
  return n * computeFactorialRec(n - 1);
};

console.log(computeFactorialRec(-1));
console.log(computeFactorialRec(0));
console.log(computeFactorialRec(5));
