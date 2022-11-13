/*
console.log("Welcome");
var abc = {
    name: "Femi",
    subject: "Design",
    location: "Nigeria"
}

console.log(abc);
*/
// constructor function and prototype
function xyz(name,subject,address) {
    this.name = name;
    this.subject = subject;
    this.address = address;
} 
// Calling or using a method in a constructor function
xyz.prototype.getName= function() {
    return this.name;
}
xyz.prototype.getAddress = function() {
    return this.address
}
//Adding a property to an xisting function or constructor function
xyz.prototype.grade ='A';
var x1 = new xyz('Tobi','math','ondo');
console.log(x1)