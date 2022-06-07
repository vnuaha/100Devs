// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced.
//  The input will be a non-negative integer.

//P(arameters): digit(n)
//R(eturn): A single digit number (sum of the digits of n)
//E(xamples):

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 +

// 1. If our given integer is greater than 9, iterate through each digit in the number.
// 2. Add up each digit.
// 3.Assess if the sum is a single-digit number.
// 4. If not, go back to Step 1.
// function digitalRoot(digit) {
//   //if digit is less than 9, return as is
//   let sum_reducer = (accumulator, currentValue) =>
//     parseInt(accumulator) + parseInt(currentValue);
//   let sum = 0;
//   if (digit < 9) {
//     return digit;
//   } else if (digit > 9) {
//     digit = digit.toString().split("");
//   }
//   return (sum = digit.reduce(sum_reducer));
// }

// function digital_root(n) {
//   //
//   let arr = n.toString(),
//     i,
//     sum = 0;
//   //if the length of the string is one , return that number
//   if (arr.length === 1) {
//     return +arr;
//   }
//   for (i = 0; i < arr.length; i++) {
//     sum += +arr[i];
//   }
//   return digital_root(sum);
// }

//
function digital_root(n) {
  if (n < 10) return n;

  return digital_root(
    n
      .toString()
      .split("")
      //iterate through list
      .reduce(function (acc, d) {
        return acc + +d;
      }, 0)
  );
}

