/*
function start(){
    setTimeout(function (){
        alert("Welcme my boy")
    }, 200);
}
*/

/*
var message = () => alert("Wecome femi");

function start() {
    setTimeout(message, 2000)
}
*/

/*

var id = 0;
var message = ()=> alert("Welcome Big money");

function start(){
    id = setTimeout(message, 5000)
}

function stop() {
    clearTimeout(id);
}

*/


var id = 0;
var message = ()=> alert("Welcome Big money");

function start(){
    id = setInterval(message, 5000)
}

function stop() {
    clearTimeout(id);
}