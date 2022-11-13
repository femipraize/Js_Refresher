function makeOrder(Coffee) {
    return new Promise((resolve, reject) => {
        console.log("Making request for a "+ Coffee)
        if (Coffee == "Black coffee") {
            resolve("Here is your coffee, have a nice day")
        }else{
            reject("Sorry! We serve Black coffee only.")
        }
    })
}

function processOder(order) {
    return new Promise((resolve, reject) => {
        console.log("Processing Order")
        resolve("Extra Information "+ order)
    })
}

/*
makeOrder("Black coffee").then(order=> {
    console.log("Order has been received")
    return processOder(order)
}).then(processOder => {
    console.log(processOder)
}).catch(error => {
    console.log(error)
})

*/

async function func1() {

    try {
        var order = await makeOrder("black coffee")
    console.log("Order has been received")
    var processOder = await processOder(order)
    console.log(processOder)
    } catch(error) {
        console.log(error)
    }
    
    
}

func1()