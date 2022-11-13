/* 
function makeOder() {
    console.log(" Here is your order have a nice days :)")
}

try {
    makeOder()
    processOrder()
} catch (error) {
    console.log("there is an error in your programme")
    
    console.log(error)
    console.log(error.name)
    console.log(error.message)

    
}

finally{
    console.log(" this Code will Excecute. No matter what!")
}


*/

var a = 9;
if (a <10) {
    throw new Error("This is a customised error.")
} else{
    console.log("Working fine")
}