var myCar = new Object()
{
    myCar.manufacturer = "Ford";
    myCar.name = "Edge";
    myCar.color = "Black";
}
myCar.make = 2012;
console.log(myCar)
/*
var myCar2 = new Map() 
let obj = {}
let func = function () {}
{
    myCar2.set("My Car name is ", "BMW");
    myCar2.set(obj, "Honda");
    myCar2.set(func, "Mercedes")
}
console.log(myCar2)
*/

var myArr = [[1, "Toyota"], [2, "Honda"], [3, "Lexus"]]
var myCar2 = new Map(myArr)
console.log(myCar2)
console.log(myCar2.get(3))

// cloning a Map
var yourCar = new Map(myCar2)
console.log(yourCar)
/*
// printing ey and values usin for of loop
for (let [key, value] of myCar2) 
{
    console.log(key+" "+value)
}
*/

/*
//printing key and values seperately
for(let value of myCar2.values())
{
    console.log(value)
}
*/