//below are the different ways with which u can select html and perform functions
//here we go for DOM

document.body.style.backgroundColor = "lightgrey"

document.getElementsByClassName("c-1")[0].style.backgroundColor = "red"

let obj1 = document.getElementById("c-2")
obj1.style.backgroundColor = "green"

let obj2 = document.getElementsByName("name")[0]
obj2.style.backgroundColor = "green"
obj2.style.color = "white"

let obj3 = document.querySelector(".c-4")
obj3.style.backgroundColor = "blue"

let obj4 = document.querySelectorAll(".c-1")
obj4[0].style.backgroundColor = "black"

let obj5 = document.getElementsByTagName("h1")

obj5[0].style.color = "red"
obj5[1].style.color = "orange"
obj5[2].style.color = "yellow"
obj5[3].style.color = "green"
obj5[4].style.color = "blue"