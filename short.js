
// using backslash /\d+321\d/
// to find or return a none digit before any character  /\D+321/
// wordly character this returns every character before the partern /\w+ber/
// this works for white spaces only if white space exist before the partern /\s+number/
var regex =/321/
var str1 = "Users phone number is 9876543210"

var output = regex.exec(str1);
console.log(output);