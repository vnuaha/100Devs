// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
// ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13.
//  If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
// "Input: test , Expected Output: grfg
// "Input: Test , Expected Output: Grfg
//Replace based on indexes

function rot13(toCipher) {
    //original string
    const originalString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //string after being ciphered (rot13)
    const cipheredString = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  //replace(regexp, replacerFunction)
  //gi global and all occurrances
  //swap out the letter from the text (toCipher) with the letter from the cipheredString by pulling the index of the letter we are on from the original alphabe(originalString) and using that index to pull the letter from the same index in the (cipheredString)
  return toCipher.replace(/[a-z]/gi, letter => cipheredString[originalString.indexOf(letter)])
  
}
rot13('b')
//replace based on index +13


function rot13(toCipher) {
    //original string
  const originalString = "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
  return toCipher.replace(/[a-z]/gi, letter => originalString[originalString.indexOf(letter) +13]);
}
rot13('nuwaha')
  


  
  