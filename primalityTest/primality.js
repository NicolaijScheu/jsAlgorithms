// Check if a given number is a prime number

// function isPrime(n) {
//   // prime numbers are only divisible by itself and one
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// Best Case n == 1 || 2 => O(1)
// Average Case: O(n) in most cases
// Worst Case: Big Primenumber => O(n)

function isPrime(n) {
  // every number that is not a prime has a product that consists of two factors that are both neither 1 nor the number itself
  // at least one factor is smaller or equal to the square root of the number
  const range = Math.sqrt(n);
  for (let i = 2; i <= range; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Best Case n == 1 || 2 => O(1)
// Average Case: O(sqrt(n)) 
// Worst Case: Big Primenumber => O(sqrt(n))


console.log(isPrime(255));
