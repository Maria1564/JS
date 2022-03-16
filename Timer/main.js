let btnStart = document.querySelector(".btnStart");
let btnStop = document.querySelector(".btnStop");
let input = document.querySelector(".inp");
let div = document.querySelector(".num");

//Задание 1

// let intervalId = setInterval(()=>{
//     if ( parseInt(div.textContent)> 0){
//         div.textContent = parseInt(div.textContent) - 1;
//     };
// }, 1000); 


// btnStart.addEventListener("click", ()=>{
//     div.textContent = input.value;
//     intervalId;
// })

// btnStop.addEventListener("click", ()=>{
//     clearInterval(intervalId);
// })


//Задание 2
let inp = document.createElement("input");
document.body.append(inp);

let h2 = document.createElement("h2");
document.body.append(h2);

let inpValue  = inp.value;

let Sec = setTimeout (function Now(){

    if (inpValue != inp.value){
        clearTimeout(Sec);
        inpValue = inp.value;
        setTimeout(Now, 1200);
    }
    else{
        setTimeout(()=>{
            h2.textContent = inpValue;
        } ,300)
        
    }
}, 4000);