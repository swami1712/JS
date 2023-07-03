// console.log("hello i am here")

//here we'll implement simple promise
//Promise: 
//Promises are used to handle asynchronous(Async code allows multiple things to happen at the same time.) operations in JavaScript.
//Both callbacks and promises help make our code asynchronous. Making callbacks async can cause issues such as callback hell, so to avoid this we can use promises instead, doing this helps us avoid this pitfall while keeping our code async and neat.
//Promises are basically used to remove the problem of callback hell.
//Callback hell: Multiple callback functions would create callback hell that leads to unmanageable code.
//pyramid of doom (callback hell):
/*
1
11
111
11111
111111
1111111

*/

let p1 = new Promise((resolve, reject) => {
    console.log("your promise is pending to resolve...")
    setTimeout(() => {

        resolve("resolved")
    }, 3000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("your promise is pending...")
    setTimeout(() => {
        reject("rejected")
    }, 3000)
})
// console.log(p1);
// console.log(p2);
// promise.then((value) => {
//     console.log(value)
// }).catch((error) => {
//     console.log("its an error!")
// })
