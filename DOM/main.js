// alert("Проверка подключения")
// document.querySelector(".text")
// document.querySelector("#txt")



// let h1A = document.querySelectorAll("option")
// console.log(h1A)


// let sel = document.querySelector(".sel")

// let options =[document.createElement("option"), document.createElement("option"), document.createElement("option")]
// options[0].textContent = "раз"
// options[1].textContent = "два"
// options[2].textContent = "три"

// for (i=0; i < options.length; i++){
//     sel.append(options[i])
// }

// let textsH1 = document.querySelectorAll(".text")
// console.log(textsH1[1])
// let h1 = document.querySelector("#txt")
// console.log(h1)
let text = document.getElementById("txt")
// console.log(text)
console.log(text.hasAttribute("id"))
console.log(text.getAttribute("id"))
console.log(text.setAttribute("new", "hi12"))
console.log(text.removeAttribute("new"))