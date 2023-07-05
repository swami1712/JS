// Each time when an async function is called, it returns a new Promise 
// 'await' can only be used within 'async' function

const understandAsyncAwait = async () => {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved p1")
        }, 1000)
    })

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved p2")
        }, 1000)
    })

    let dw = await p1;
    let bw = await p2;
    //returning as an array
    return [dw, bw];
}


understandAsyncAwait().then((value) => {
    console.log(value)
});

//simple async-await implementation

// async function asdf() {
//     return 4;
// }

// another way of making async function
// // add=async ()=>{
// //     console.log
// // }

// asdf().then((value) => {
//     alert(value)
// })

