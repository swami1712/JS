
// 1.exporting named exports

const hello1 = (a, b) => {
    let c = a + b;
    console.log("this is ur result for named export: " + c)
}
export { hello1 };

// 2.exporting default exports

const hello2 = (a, b) => {
    let c = a + b;
    console.log("this is ur result for default export: " + c)
}
export default hello2;