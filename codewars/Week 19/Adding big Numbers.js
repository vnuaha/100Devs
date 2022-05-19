function add(a, b) {
  let result = "",
    carry = 0;
  a = a.split("");
  b = b.split("");
  // only performs the maths while the a number, b number or the carry number exist.
  while (a.length || b.length || carry) {
    carry += ~~a.pop() + ~~b.pop();
    // This ensures that only the amount over 10 is inputted i.e So for 9+9, you only
    //want to carry the input the 8 in 18, and carry the one. That is what this line
    //of code will do, input ONLY the 8. Or the 4+3, it will still input the whole 7.
    result = (carry % 10) + result;
    //this is for when the sum of the two digits is more than 9, is carries the 1
    //into the next line. So for the preview 9+9 example, the 8 was inputted on the
    //previous line, and the 1 is carries over here
    carry = carry > 9;
  }

  return result;
}
