
// var can be updated and redeclared, dont make use of it in modern js as it has been replaced by let in ES6. (global scoped)
// let can also be updated but not redeclared, use it (block scoped)
// const can neither be updated or redeclared, use it as well (black scoped)

var b = 10;
var b = "hello";
console.log(b);

let a = 10;
a = 20;
console.log(a);

let c = 110;
const pi = 3.14;
{
    let c = 40;
    console.log(c + " " + pi);
}
console.log(c);


const sum = (a, b) => {
    return a + b;
}

console.log(sum(10, 20));
