/*
// creating a prototype
const Employee = {
    role:function() {
        return "Software eng"
    },
    changeName: function(name) {
        this.name = name;
    }
}

var e1 = Object.create(Employee);
e1.role = "designer";
e1.name = "tunde";
e1.changeName("Femi")
console.log(e1);

var e2 = Object.create(Employee, {
    role:{value: "Dancer"},
    name: {value: "Zakkius", writable : true}
})
e2.changeName("Lemon");
console.log(e2)
*/

function Employee(name, id, salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
}

Employee.prototype.post = function() {
    return (this.name+" "+ "is a product designer");
}

var femi = new Employee("Femi",001,"2,000,000");
console.log(femi);

function programmer(name, id, salary, language){
    Employee.call(this, name, id, salary);
    this.language = language;
}

programmer.prototype = Object.create(Employee.prototype);
programmer.prototype.constructor = programmer;
var victor = new programmer("Victor", 004, "1,000,000", "English");
console.log(victor);