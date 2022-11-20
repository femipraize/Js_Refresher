
// Dos similar stuf as itirators
function* generate(){
    let i = 0;
    yield "Toyota";
    yield "Honda";
    yield "Nissan";
    yield "Mercedes";
}

 let gen = generate()
console.log(gen.next().value)
    




/*

//Using with a loop
function* generate()
{
    let i = 0;
    var ar = ["Toyota", "Mercedes", "Honda", "Nissan"]
    while(i<ar.length)
    {
        yield ar[i]
        i++;
    }
}

let gen = generate()
console.log(gen.next().value)

*/