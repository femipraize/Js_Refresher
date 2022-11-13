/*
var car = {
    car_manufacturer: "Toyota",
    car_model: "Corolla",
    price: 2000000,
    drive: function() 
    {
        document.write("This car come with a two wheel drive")
    }
}

car.driveType()
//document.write("<h1>"+car.drive()+"</h1>")
*/

/*
function cars(car_manufacturer, car_model, price)
{
    this.car_manufacturer = car_manufacturer;
    this.car_model = car_model;
    this.price =price;
    this.driveType  = function()
    {
        document.write("This car comes with a four wheel drive")
    }
}

var c1 = new cars("Jeep", "Z1",5000000)
c1.driveType()
document.write(c1.price)

*/

/*
//delete function
var car = {
    car_manufacturer: "Toyota",
    car_model: "Corolla",
    price: 2000000,
    drive: function() 
    {
        document.write("This car come with a two wheel drive")
    }
}
delete car.price;
document.write("<h1>"+car.price+"</h1>")
*/


//
//Changing data type
var car = {
    car_manufacturer: "Toyota",
    car_model: "Corolla",
    price: 2000000,
    drive: function() 
    {
        document.write("This car come with a two wheel drive")
    }
}
car.price = "five hundered"
document.write("<h1>"+car.price+"</h1>")
document.write("<h1>"+typeof(car.price)+"</h1>")