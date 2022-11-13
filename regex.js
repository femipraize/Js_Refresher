// Regular Expression

//Regular expression are objects use for pettern matching or if you want to search for something or replace something from a string

//N.B use the letter (i) beside the apostrophy in order to avoid it beign case sensitive
//N.B use the letter (g) beside the apostrrophy to accomodate repeation of words in the sescrh, can also be used for global search
var regexTest = /Hello/g
var testStrings = "Hello Femi  i hope you are doing Okay, Hello It is good aseeing you.doings from fem, no be lie femzy femi"


// working with exec()
/*
var search = regexTest.exec(testStrings)
console.log(search)
*/

//working with test()

//var search = regexTest.test(testStrings)
//console.log(search)


// working with match()
//var  search = testStrings.match(regexTest)
//console.log(search)

//working with replace()

var search = testStrings.replace(regexTest, "Hi")
console.log(search)