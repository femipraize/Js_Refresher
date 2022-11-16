function cars(values)
{
    let index = 0;
    return{
        next: function(){
            if(index<values.length)
            return{
                value: values[index++],
                done: false
            }
            else
            {
                return{
                    done: true
                }
            }
        }
    }
}



var arr = ["BMW", "audi", "Benz", "Toyota"]
var newCar = cars(arr)
console.log(newCar.next().value)
console.log(newCar.next().value)
console.log(newCar.next().value)
console.log(newCar.next().value)
console.log(newCar.next().value)
/*
for(let i = 0; i<arr.length; i++)
{
    console.log(arr[i])
}


for(let i of arr)
{
    console.log(i);
}
*/