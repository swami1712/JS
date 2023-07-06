
// so below is the explanation for fetch-api
// here p is promise and u know promise well like what it does? what it is used for? and with promises we use 'then' if promise is 'resolved' 
// or if u still have confusion then refer to 09-promises 

let p = fetch("https://codeforces.com/api/user.rating?handle=Fefer_Ivan")
p.then((val) => {
    return val.json();
}).then((response) => {
    console.log(response)
})