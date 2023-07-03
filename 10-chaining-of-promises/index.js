//this way you can connect multiple promises one by one
//next promise will be executed based on the value of previous one

let p1 = new Promise((resolve, reject) => {
    console.log("resolving promise p1");
    setTimeout(() => {
        resolve("resolved p1")
        // reject(0)
    }, 3000)

})

p1.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        resolve("resolved p2");
        // console.log("resolved p2")
    })
    return p2;
}).then((value) => {
    console.log(value);
    //short way to return promise
    return new Promise((resolve, reject) => {
        resolve("resolved p3");
    })
})//...keep on creating new promises if u want...

p1.catch((error) => {
    console.log("u made an error " + error)
})

p1.then(() => {
    alert("this is a simple example of multiple handlers for promise p1")
})






/*
.then: 
.then is used to capture resolve requests


.catch: 
.catch is used to capture reject requests


-we can use multiple ".then" and ".catch" blocks for single promise i.e. we can have multiple handlers for single promise
-while chaining promises next .then or .catch block executed based on previous
-but in case of multiple handlers each block executes independently irrespective of other blocks



*/