/* 
How would you optimize this code to follow clean code principles and best practices in terms of naming conventions, readability, maintainability, and functionality?

function s(a, b) {
  var x = 0;
  for (var i = a; i <= b; i++) {
    x = x + i;
  }
  return x;
}

function calc(a, b, c) {
  const res = s(a, b);
  if (c == true) {
    res = res * 2;
  }
  return res;
}
*/

function sumRangeBetween(a, b) {
  let sum = 0;
  // add all numbers between a and b
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

// check if flag is true, if so, multiply the result by 2
function doubleSumRangeWithFlag(a, b, flag) {
  let result = sumRangeBetween(a, b);
  return flag ? result * 2 : result;
}

// example usage
console.log(doubleSumRangeWithFlag(1, 5, true)); // 30
console.log(doubleSumRangeWithFlag(1, 5, false)); // 15
