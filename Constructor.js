//Object constructor Method

/*
//Object literal method
//var obj_name = new Object();
var rect1 =
{
    length : 5,
    width : 10,

    getarea : function()
    {
        return this.length*this.width;
    },

    getparameter : function()
    {
        return 2*this.length+2*this.width;
    }
};

document.write("<h2>"+"The Length of rectangle is"+rect1.length);
document.write("<h2>"+"The Width of rectangle is"+rect1.width);
document.write("<h2>"+"The Area of rectangle is"+rect1.getarea());
document.write("<h2>"+"The Parameter of rectangle is"+rect1.getparameter());

*/

/*
//Object constructor method
//var obj_name = new Object();
var rect2 = new Object();
rect2.length = 5;
rect2.width = 10;

rect2.getarea = function()
{
    return this.length*this.width;
};

rect2.getparameter = function()
{
    return 2*this.length+2*this.width;
};

document.write("<h2>"+"The Length of rectangle is"+rect2.length);
document.write("<h2>"+"The Width of rectangle is"+rect2.width);
document.write("<h2>"+"The Area of rectangle is"+rect2.getarea());
document.write("<h2>"+"The Parameter of rectangle is"+rect2.getparameter());

*/

//Constructionfunction method

function rect3(length,width) 
{
    this.length = length;
    this.width = width;
    this.getarea = function(){
        return length*width;
    };
    this.getperimeter = function(){
        return 2*length + 2*width;
    }
}

var r1 = new rect3(5,10);
document.write("<h1>"+r1.length+"</h2>");
document.write("<h1>"+r1.width+"</h2>");
document.write("<h2>"+"The Area of rectangle is"+r1.getarea()+"</h2>");
document.write("<h2>"+"The Parameter of rectangle is"+r1.getperimeter()+"</h2>");

var r2 = new rect3(4,8);
document.write("<h1>"+r2.length+"</h2>");
document.write("<h1>"+r2.width+"</h2>");
document.write("<h2>"+"The Area of rectangle is"+r2.getarea()+"</h2>");
document.write("<h2>"+"The Parameter of rectangle is"+r2.getperimeter()+"</h2>");