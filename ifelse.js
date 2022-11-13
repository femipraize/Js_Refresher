/*var x = 8;

if (x<10)
{
    document.write("X is less than 10")
}
else if (x=10)
{
    document.write('x is equal to 10')
}
else 
{
    document.write('x is greater than 10')
}
*/

/*
var x = 8;
if (x%2==0)
{
    document.write('this number is even')
}
else {
    document.write('number is odd')
}
*/

/*
    /nexted if
var x = -0.1;
if (x>0)
{
    if (x%2==0)
    {
        document.write('positive and even')
    }
    else
    {
        document.write('positive and odd')
    }
}
else if (x<0)
{
    if(x%2==0)
    {
        document.write('negative and even')
    }
    else
    {
        document.write('negative and even')
    }
}
else
{
    document.write('number is Zero')
}
*/

/*
var x = -1;
if (x>0 && x%2==0)
{
    document.write('number is positive and even')
}
else if (x>0 && x%2!==0)
{
    document.write('number is postive and odd')
}
else if (x<0 && x%2==0)
{
    document.write('number is negative and even')
}
else if (x<0 && x%2!==0)
{
    document.write('number is negative and odd')
}
else
{
    document.write('number is zero')
}

*/

/*
var month = 1;
switch(month)
{
    case 1:
        document.write('January')
        break;
    case 2:
        document.write('Febuary')
        break;
    case 3:
        document.write('March')
        break;
    case 4:
        document.write('April')
        break;
    case 5:
        document.write('May')
        break;
    case 6:
        document.write('June')
        break;
    case 7:
        document.write('July')
        break;
    case 8:
        document.write('August')
        break;
    case 9:
        document.write('September')
        break;
    case 10:
        document.write('October')
        break;
    case 11:
        document.write('Nevember')
        break;
    case 12:
        document.write('December')
        break;
    default:
        document.write('wrong input')

}

*/

var month = 'May';
switch(month)
{
    case 'May':
        document.write('Fifth month of the year') 
        break;
    case 'june':
        document.write('Sixth month of the year')
        break;
    default:
        document.write('Wrong input')
}