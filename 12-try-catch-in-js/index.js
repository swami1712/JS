// console.log('hello')

// simple try catch implementation in js

try {
    console.log(hurray)
}
catch (error) {
    alert("hey you have made this error: " + error + ", check ur code again!")
}

// try and catch doed work well with scheduled code.
try {
    setTimeout(() => {
        console.log(lksjflasj);
    }, 3000);
}
catch (err) {
    alert("error")
}
// above code won't encounter an err though there is an error



//custom errors
try {
    let age = prompt("Enter ur age-")
    age = Number.parseInt(age);
    if (age < 0)
        throw new ReferenceError("akldflaksdf")
} catch (err) {
    console.log(err.name)
    console.log(err.stack);
}

try {
    console.log(iamerror);
} catch (error) {
    console.log(againerror);
}
finally {
    console.log("nice! finally u made me execute")
}


