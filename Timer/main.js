let btnStart = document.querySelector(".btnStart");
let btnStop = document.querySelector(".btnStop");
let input = document.querySelector(".inp");
let div = document.querySelector(".num");

//Задание 1

let intervalId = setInterval(()=>{
    if ( parseInt(div.textContent)> 0){
        div.textContent = parseInt(div.textContent) - 1;
    };
}, 1000); 


btnStart.addEventListener("click", ()=>{
    div.textContent = input.value;
    intervalId;
})

btnStop.addEventListener("click", ()=>{
    clearInterval(intervalId);
})