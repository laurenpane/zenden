function isUgly(num) {
  let multiples = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      multiples.push(i);
    }
  }
  let primes = multiples.filter((num) => isPrime(num));
  return (
    primes.length > 0 &&
    primes.every((digit) => digit === 2 || digit === 3 || digit === 5)
  );
}

function isPrime(num) {
  let multiples = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      multiples.push(i);
    }
  }
  return multiples.every((digit) => digit === 1 || digit === num);
}

// function isUglyPrime(num) {
//   return num === 2 || num === 3 || num === 5;
// }

console.log(isUgly(6));
