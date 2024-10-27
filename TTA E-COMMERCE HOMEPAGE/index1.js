// let n=0

// for (n=0; n<=100; n++) {
    // conditional statement
// }

// Enhanced Simple Calculator with Modulo

function calculate(num1, operator, num2) {
  switch(operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Error: Division by zero";
      }
    case '%':
      if (num2 !== 0) {
        return num1 % num2;
      } else {
        return "Error: Modulo by zero";
      }
    default:
      return "Error: Invalid operator";
  }
}

// Example usage
console.log(calculate(5, '+', 3));  // Output: 8
console.log(calculate(10, '-', 4)); // Output: 6
console.log(calculate(3, '*', 7));  // Output: 21
console.log(calculate(15, '/', 3)); // Output: 5
console.log(calculate(17, '%', 5)); // Output: 2
console.log(calculate(10, '/', 0)); // Output: Error: Division by zero
console.log(calculate(10, '%', 0)); // Output: Error: Modulo by zero
console.log(calculate(5, '^', 2));  // Output: Error: Invalid operator
  for (let n = 1; n <= 100; n++) {
      if (n % 3 === 0 && n % 5 === 0) {
          console.log("FizzBuzz");
      } else if (n % 3 === 0) {
          console.log("Fizz");
      } else if (n % 5 === 0) {
          console.log("Buzz");
      } else {
          console.log(n);
      }
  }
