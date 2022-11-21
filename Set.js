var mySet = new Set()
/*
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(4)
mySet.add(5)
console.log(mySet)
*/
let arr = [1,2,3,5,7,6,4,9,10,2]
let myNewSet = new Set(arr)
console.log(myNewSet)

//Printing the set in form of an array
let myArr = Array.from(myNewSet)
console.log(myArr)

// Printing the set using for of loop
for(let item of myNewSet)
{
    console.log(item)
}

//Delelting from the set
myNewSet.delete(10)
console.log(myNewSet)

//To Delete or clear the entire set
myNewSet.clear()
console.log(myNewSet)