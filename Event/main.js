let sqr = document.querySelector(".square");
let btn = document.querySelector(".btn");
let inp = document.querySelector(".input");

//Задание 1
// btn.addEventListener("click", () => alert("Привет Мир!"));

//Задание 2
// btn.addEventListener("click", () =>{
//     inp.value = "test@email.ru";
// })

//Задание 3
// btn.addEventListener("click", ()=>{
//     if (inp.value == ""){
//         alert("Вы ничего не ввели в поле");
//     }
//     else{
//         alert(`Вы ввели ${inp.value} `);
//     }
// })

//Задание 4
// let inp1 = document.querySelector(".input1");
// let inp2 = document.querySelector(".input2");

// btn.addEventListener("click", ()=>{
//     let last_input = document.createElement("input")
//     last_input.value = inp1.value;
//     inp1.value = inp2.value;
//     inp2.value = last_input.value;

// })

//Задание 5
// let btn_act = document.querySelector(".btn_act");
// let btn_block = document.querySelector(".btn_blok");

// btn_block.addEventListener("click", () => {
//   // inp.setAttribute("disabled", "disabled");
//   // inp.disabled = true;
// });

// btn_act.addEventListener("click", () => {
//   // inp.removeAttribute("disabled");
//   inp.disabled = false;
// });

//Задание 6
// btn.addEventListener("click", () => {
//   if (btn.textContent == "Скрыть квадрат") {
//     // sqr.style.backgroundColor = "white";
//     // sqr.style.display = "none";
//     sqr.hidden = true;
//     btn.textContent = "Показать квадрат";
//   } else {
//     // sqr.style.backgroundColor = "brown";
//     // sqr.style.display = "";
//     sqr.hidden = false;
//     btn.textContent = "Скрыть квадрат";
//   }
// });


//Задание7
sqr.addEventListener("mouseover", ()=>{
    sqr.style.backgroundColor = "green";
});

sqr.addEventListener("mouseout", ()=>{
    sqr.style.backgroundColor = "";  
})