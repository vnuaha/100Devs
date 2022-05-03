// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing
// second character of the final pair with an underscore ('_').
//
// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


// function solution(str){
//   const re = /\w{1,2}/g;
//   //match a word  with atleast one or utmost two items
//   const matchStr = str.match(re);
//   console.log(matchStr)
  
//   if (str.length === 0) {
//     return [];
//   }
  
//   const result = matchStr.map((elm) => {
//     return elm.length % 2 ? elm + '_' : elm;
//   });
  
//   return result;
// }

// solution('12345')

function solution(str){
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
      result.push(str[i] + str[i+1]);
      i += 2;
    }
  return result;
}