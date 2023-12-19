// Return the nth element of the Fibonacci sequence

const fib = function (n) {
  // Calculate the sequence up to the element we are looking for
  const sequence = [1, 1];
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
  
  return sequence[n];
};

console.log(fib(4));
