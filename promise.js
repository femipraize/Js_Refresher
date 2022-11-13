/*var learnDriving = new Promise(function (resolve, reject) {
    var drive = false;
    if (drive) {
        resolve("Yes, ")
    }else{
        reject("No, ")
    }
});

learnDriving.then(function(resolve){
    console.log(resolve+ "User knows how to drive")
}).catch(function (reject) {
    console.log(reject+ "User does not know how to drive")
})

*/

/*
var functions =  function(){
    return new Promise(function(resolve, reject){
        resolve("Learnt functions")
    });
};

var callback = function(message){
    return new Promise(function(resolve, reject){
        resolve(message+ "learnt callback functions");
    });
}

var promises = function(message){
    return new Promise(function(resolve, reject){
        resolve(message+ "Good to go for promises in javascript")
    });
}

functions().then(function (result){
    return callback(result);
}).then(function(result){
    return promises(result);
}).then(function(result){
    console.log("Good to go : "+ result);
})
*/

/*
let p = new Promise((resolve, reject) => {
    let a = 1+1
    if (a== 2) {
        resolve("Success")
    } else{
        reject("Failed")
    }
})

p.then((message) =>{
    console.log("This is in the then" + message)
}).catch((message) =>{
    console.log("This is in the catch"+ message)
})
*/

/*
const userLeft = false
const userWatchingCatmeme = false

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: "User Left",
                message: ":("
            })
        } else if(userWatchingCatmeme){
            reject({
                name: "Users Watching Cat Meme",
                message:"WebDevSimplified < Cat"
            })
        } else {
            resolve("Thumbs Up and Subcribe")
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log("Success:" + message)
}).catch((error) => {
    console.log(error.name+ " "+error.message)
})

*/

const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 Recorded")
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 Recorded")
})

const recordVideoThree = new Promise((resolve, reject) =>{
    resolve("Video 3 Recorded")
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) =>{
    console.log(messages )
})

/*
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) =>{
    console.log(messages)
})
*/