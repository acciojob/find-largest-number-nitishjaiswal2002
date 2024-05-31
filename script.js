function findLargest(a, b, c) {
  // Check if a is greater than or equal to b and a is greater than or equal to c
  if (a >= b && a >= c) {
    return a;
  }
  // Check if b is greater than or equal to a and b is greater than or equal to c
  else if (b >= a && b >= c) {
    return b;
  }
  // If both conditions above are false, c must be the largest
  else {
    return c;
  }
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
