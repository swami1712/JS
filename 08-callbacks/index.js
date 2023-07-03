//callback is a function called within another function
//simplified explanation of callbacks -->


const addh1 = (content, callback) => {
    let h1 = document.createElement("h1")
    h1.innerHTML = content

    h1.onerror = () => {
        console.log("there is an error ")
    }
    document.body.appendChild(h1);
    callback();
}



const loadScript = (src, callback) => {
    let scrip = document.createElement("script")
    scrip.src = src

    document.body.appendChild(scrip)

    // document.body.appendChild(document.createElement("script").src = src)
    scrip.onload = () => {
        console.log("loaded")
    }
    scrip.onerror = () => {
        console.log("Sorry, there is an error! ")
    }


    console.log("yes i appended script " + src)
    callback();
}

function hello() {
    alert("hello world");
}

function goodmorning() {
    alert("good morning")
}


loadScript("https://cdn.jsdeleivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", hello)
addh1("hello everyone", goodmorning)