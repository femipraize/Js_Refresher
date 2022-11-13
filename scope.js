// Local variable are only present in a function and 
// can only be accessed withing the function and not outside the function
function myFunction() 
{
    var a = 10;
    document.write("<h1>"+a+"</h1>")
}
myFunction();
// global variables are accessble through out the life time
// entire code or programme
var a = 5;
document.write("<h1>"+a+"</h1>")

// Any veriable declared with out the var key word 
// is also known as a global variable