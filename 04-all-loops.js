// simple for loop

for (let i = 0; i < 5; i++) {
    console.log("this is " + i);
}

// for-in loop

let obj = {
    harry: 10,
    garry: 50,
    larry: 40,
    scholar: 90
}

for (i in obj) {
    console.log("marks of " + i + " are " + obj[i]);
}

// for-of loop

let arr = ['harry', 'larry', 'garry'];

for (i of arr) {
    console.log(i);
}

//while loop

let j = 12;
while (j > 8) {
    console.log("hi i am still executing");
    j--;
}