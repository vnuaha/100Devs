var a = "";
var b = "";
var num = [];
var ans;

// All the numbers and operators input will be stored in an array "num" using function "sendValue()"
function sendValue(digit) {
  num.push(digit);

  if (num.length != 1) {
    a = "";
    document.getElementById("result").innerHTML = a; // clearing the screen.
  }

  for (i = 0; i < num.length; i++) {
    a = a + num[i]; // concatenate the elements of the array "num" into a single string, which will be displayed on the screen
  }

  document.getElementById("result").innerHTML = a; // displaying the concatenated string
}

// when the user presses "=", function "equalTo()" is called
function equalTo() {
  document.getElementById("result").innerHTML = "";
  for (i = 0; i < num.length; i++) {
    b += num[i]; // concatenating the array "num" into a single string
  }
  ans = eval(b);
  document.getElementById("result").innerHTML = ans; // result display

  while (num.length > 0) {
    num.pop(); // emptying the array "num"
  }
  num.push(ans.toString());
}

// When user presses "AC", function "clearScr()" is called
function clearScr() {
  document.getElementById("result").innerHTML = "";

  while (num.length > 0) {
    num.pop(); // emptying the array "num"
  }

  a = "";
  b = "";
}
