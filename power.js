// Power number with iterative method
const computePowerIt = (n, p) => {
  if (p === 0) return 1;
  if (n === 0 || p % 1 !== 0) return 0;
  result = 1;
  if (p < 0) {
    for (let i = 0; i < Math.abs(p); i++) {
      result /= n;
    }
    return result;
  }
  if (p > 0) {
    for (let i = 0; i < p; i++) {
      result *= n;
    }
    return result;
  }
};

console.log(computePowerIt(-2, 2));
console.log(computePowerIt(2, 3));
console.log(computePowerIt(2, -2));
console.log(computePowerIt(0, 2));
console.log(computePowerIt(20, 0));
console.log(computePowerIt(-2, -5));
console.log(computePowerIt(-2, 0.3));

// Power number with recursive method
const computePowerRec = (n, p) => {
  if (p === 0) return 1;
  if (n === 0 || p % 1 !== 0) return 0;
  if (p < 0) return (1 / n) * computePowerRec(n, p + 1);
  if (p > 0) return n * computePowerRec(n, p - 1);
};

console.log(computePowerRec(-2, 5));
console.log(computePowerRec(-2, 2));
console.log(computePowerRec(2, 3));
console.log(computePowerRec(2, -2));
console.log(computePowerRec(0, 2));
console.log(computePowerRec(20, 0));
console.log(computePowerRec(-2, -5));
console.log(computePowerRec(-2, 0.3));
