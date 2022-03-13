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
// sqr.addEventListener("mouseover", ()=>{
//     sqr.style.backgroundColor = "green";
// });

// sqr.addEventListener("mouseout", ()=>{
//     sqr.style.backgroundColor = "";  
// })


//Задание8
// let main_block = document.querySelector(".main");
// let  buttons = document.querySelectorAll(".btn");


// let AllBtnRed = ()=>{
//     for (i = 0; i < buttons.length; i++){
//         if(!(getComputedStyle(buttons[i]).backgroundColor == "rgb(165, 42, 42)")){
//             buttons[i].style.backgroundColor = null;
//         }
//     }
// }

// main_block.addEventListener("click", (event)=>{
//     let select_button = event.target;
//     AllBtnRed();
//     select_button.style.backgroundColor = "green";
//     if(select_button== main_block){
//         main_block.style.backgroundColor = null;
//     }
// })



//Задание9
let main_block = document.querySelector(".main");
let result = document.querySelector(".result");
let backspace = document.querySelectorAll(".backspace");

let func_even = function(event){
    if(event.target.closest(".btn_mark")){ 
        let select_button = event.target;
        let button_value = select_button.textContent;
        inp.value += button_value;
    }
}

main_block.addEventListener("click", func_even);

//кнока равно
result.addEventListener("click", ()=>{
    inp.value = eval(inp.value);
})

//кнопка C
backspace[0].addEventListener("click", ()=>{
    inp.value = null;
})

//кнопка <-
backspace[1].addEventListener("click", ()=>{
    let inpValue = inp.value;
    let inpLen = inp.value.length;
    inp.value = inpValue.slice(0, inpLen - 1);
})