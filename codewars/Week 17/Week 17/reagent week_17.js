// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

// We know the rules of confect:

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)

// Task

// You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.
// Example

// For formula = [1,3,7], The output should be true.

// For formula = [7,1,2,3], The output should be false.

// For formula = [1,3,5,7], The output should be false.

// For formula = [1,5,6,7,3], The output should be true.

// For formula = [5,6,7], The output should be true.

// For formula = [5,6,7,8], The output should be true.

// For formula = [6,7,8], The output should be false.

// For formula = [7,8], The output should be true.
// Note

//     All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.

// arr=[1,2,3,4,5,6,7,8]
// //coding and coding..
// //material1 and material2 cannot be selected at the same time
// for (i=0; i++; i<=4){
//    if (arr[i] && arr[i+1]){
//   console.log("material$(i) and material$(i+1) cannot be selected at the same time")
// }
// }
// for (i=5; i++; i<=6){
//     if(arr[i]==i && arr[i]==i+1) {
//         console.log("material$(i) and material$(i+1) must be selected at the same time")
//     }
// }
//  for (i=7; i++; i<=8){
//     if (arr[i]==i || arr[i]==i+1) {
//         console.log("material$(i) or material$(i+1) must be selected (at least one, or both)")
//     }
//  }

//FAILS TESTS
function isValid(formula) {
  if (formula.includes(1) && formula.includes(2)) {
    return false;
  } else if (formula.includes(3) && formula.includes(4)) {
    return false;
  } else if (formula.includes(5) && formula.includes(6)) {
    return true;
  } else if (formula.includes(7) || formula.includes(8)) {
    return true;
  } else {
    return false;
  }
}

//PASSES ALL TESTS
function isValid(formula) {
  //material1 and material2 cannot be selected at the same time
  if (formula.includes(1) && formula.includes(2)) {
    return false;
     // material3 and material4 cannot be selected at the same time
  } else if (formula.includes(3) && formula.includes(4)) {
    return false;
    // material5 and material6 must be selected at the same time
  } else if (formula.includes(5) != formula.includes(6)) {
    return false;
    // material7 or  material8 must be selected(at least one, or both)
  } else if (formula.includes(7) || formula.includes(8)) {
    return true;
  } else {
    return false;
  }
}
