/*
Description:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

//Tests
// humanReadable(86400), '24:00:00'
// humanReadable(3599), '00:59:59'

function humanReadable(seconds) {
    var hh = parseInt(seconds / 3600);
    var mm = parseInt(seconds / 60) % 60;
    var ss = seconds % 60;
  
    //padding
    var padding = function(val) {
      //adding a zero if less than 10 (maximum time never exceeds 359999)
      return val < 10 ? "0" + val : val;
    };
  
    return padding(hh) + ":" + padding(mm) + ":" + padding(ss);
  }