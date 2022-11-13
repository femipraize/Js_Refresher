class Student{
    constructor(name,age,roll) {
        this.name =name;
        this.age =age;
        this.roll =roll;
    }
    org(){
        return("I am"+" "+ this.name+" "+"from Auto X");
    }
    dob(){
        return ("The date of birth of"+ this.name+"is"+ (2020-this.age))
    }
    static add(a,b){
        return a+b;
    }
}


/*
var femi =new Student("Femi", 32, 6);
console.log(femi)
console.log(Student.add(1,2))
*/

class Student2 extends Student {
    constructor(name,age,roll,language,section){
        super(name, age, roll);
        this.language = language;
        this.section = section;
    }

}

var Femz = new Student2("femz",32, 6, "english", "B");
console.log(Femz);
console.log(Student2.add(89,29));