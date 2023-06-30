// Map, filter and reduce are the methods of modern js.


// The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
let arr = [1, 2, 3, 4, 5]

const b = arr.map((item) => {
    return item * 2;
})

console.log(b)

// The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.
const c = arr.filter((item) => {
    return item % 2 === 0;
})

console.log(c)

// The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

const d = arr.reduce((result, item) => {
    return result + item;
})

console.log(d)