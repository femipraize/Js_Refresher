/*function one() {
    setTimeout(function(){console.log("Calling fuction one")
    two();
    }, 3000)
}

function two() {
    console.log("Caling Function Two");
}
function three() {
    console.log("Calling Function Three")
}
one();
three();
*/

function person(friend, person2) {
    setTimeout(function(){ 
    console.log("My friend name is "+ friend);
    person2() }, 3000);
   
}

function person2() {
    console.log(" and my name is Femi")
}

person("Abraham", person2)
