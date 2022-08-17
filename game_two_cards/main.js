const containerCards = document.querySelector(".containerCards");
const main = document.querySelector(".main");

let arrValuesCards = [];
let countCards = prompt("Введите количество карт");
countCards = parseInt(countCards);
console.log(typeof countCards, countCards);

for (i = 0; i < 2; i++){
  for(j = 1; j <= countCards / 2; j++){
    arrValuesCards.push(j)
  }
}


//Создание массива со значениями в рандомном порядке
let createRandomCards = (arr) =>{
  // console.log(arr)
  for(i = arr.length- 1; i >= 0; i--){
    // console.log(arr[i])
    let tmp  = arr[i];
    let rand = Math.floor(Math.random()*(i + 1))
    arr[i]= arr[rand]
    arr[rand] = tmp
  }
 return arr
}

const RandomCards = createRandomCards(arrValuesCards)
console.log(RandomCards) //массив рандомных значений карт

//Создание карточек
function createCard(container,arrValue) {
  
  counts = countCards / 2;
  console.log(typeof(arrValue), arrValue)
  
  for (j = 0; j < arrValue.length; j++) {
    card = document.createElement("div");
    card.className = "card";
    card.classList.add(j + 1);

    container.append(card);

    frontCard = document.createElement("div");
    frontCard.className = "frontCard";
    frontCard.textContent = arrValue[j];
    backCard = document.createElement("div");
    backCard.className = "backCard";
    card.append(frontCard);
    card.append(backCard);
  }

  


  // for (i = 0; i < 8; i++) {
  //   card = document.createElement("div");
  //   card.className = "card";
  //   card.classList.add(i + 1);
  //   container.append(card);

  //   frontCard = document.createElement("div");
  //   frontCard.className = "frontCard";
  //   frontCard.textContent = arrValuesCards[i];
  //   backCard = document.createElement("div");
  //   backCard.className = "backCard";
  //   card.append(frontCard);
  //   card.append(backCard);
  // }
  let cards = document.querySelectorAll(".card");

  let backCards = document.querySelectorAll(".backCard"); //?
  let frontCards = document.querySelectorAll(".frontCard"); //?
  return { container, cards, frontCards, backCards };
}

const createdCard = createCard(containerCards, RandomCards);


//Перемешивает значения в массиве
let changeValue = (arrRandValue)=>{
  let arr = createRandomCards(arrRandValue)
  for (j = 0; j <arr.length; j++) {
    console.log(arr[j], arr)
    console.log(createdCard.frontCards[j].textContent = arr[j])
  }
}




let selectCard;
let selectBackCard;
let rightCards = [];
let arrValue = [];
let arrFind = [];
let selectFrontCard;
let start = false;

function open(createdCard) {

  createdCard.container.addEventListener("click", (event) => {
    if (event.target.closest(".card")) {
      selectCard = event.target.closest(".card");

      selectBackCard = selectCard.querySelector(".backCard"); //задняя сторона выбранной карты
      arrFind.push(selectBackCard);

      selectFrontCard = selectCard.querySelector(".frontCard"); //передняя сторона выбранной карты
      rightCards.push(selectFrontCard);

      arrValue.push(selectFrontCard.textContent); //добавление в массив значение выбранной карты
      selectBackCard.hidden = true;
    }
    start = true;
   
  });
 
}

const OpenCards = open(createdCard);
let stopTimer
let totalRightCard;

function chek() {

  totalRightCard = 0;
    j = 0
    
  let interval = setInterval(function () {
    
    if (start) {
      stopTimer = true
      if(j < 1){
        console.log("поехали")
        timer();
        j++
      }
      if (totalRightCard < counts && sec != 0) {
        // const timer_ = timer();
        // console.log(totalRightCard)
        // console.log(counts)
        OpenCards;
        console.log("Open")
        if (arrValue[0] == arrValue[1] && arrValue.length != 0) {
          console.log("this")
          // console.log(sec)
          // console.log(rightCards[0], rightCards[1], rightCards);
          for (let card of rightCards) {
            card.style.backgroundColor = "#00807d99";
          }
          arrValue.splice(0, 2);
          arrFind.splice(0, 2);
          totalRightCard++;
          if (totalRightCard == counts) {

            console.log(totalRightCard)
            stopTimer = false;
            rightCards.splice(0, rightCards.length);
            
            console.log("stop", start);
          }
        } else if (arrValue.length == 0) {
          // console.log("не выбраны карточки");
        } else {
          if (arrFind.length == 2) {
            arrFind[0].hidden = false;
            arrFind[1].hidden = false;

            arrValue.splice(0, 2);
            console.log("Значения не равны");
            arrFind.splice(0, 2);
          } else {
            arrFind[0].hidden = false;
            arrValue.splice(0, 1);
            arrFind.splice(0, 1);
          }

          rightCards.splice(0, rightCards.length);
        }

      }else if(sec == 0){

        alert("время вышло")
        min = 1
        sec = 60
        minute.innerText = min
        seconds.innerText = "00"
 
        const btn = document.createElement("button");
        btn.className = "btnAgain";
        btn.textContent = "Начать заново";
        main.append(btn);
        btn.addEventListener("click", () => {
          console.log("нажата кнопка btn");

          startAgain(createdCard);
          changeValue(RandomCards)
          btn.remove();
          chek();
        });
      
        clearInterval(interval)
        
      }else {
        min = 1
        sec = 60
        minute.innerText = min
        seconds.innerText = "00"
  

        const btn = document.createElement("button");
        btn.className = "btnAgain";
        btn.textContent = "Начать заново";
        main.append(btn);
        btn.addEventListener("click", () => {
          console.log("нажата кнопка btn");
      
          startAgain(createdCard);
          changeValue(RandomCards)
          btn.remove();
          chek();
        });
        // start = false
        clearInterval(interval)

        
      }
    }
  }, 1800);
}

const cheking = chek();

function startAgain(allCards) {
  for (let i = 0; i < allCards.backCards.length; i++) {
    allCards.backCards[i].hidden = false;
    // console.log(allCards.backCards[i])

    allCards.frontCards[i].style.backgroundColor = null;
  }
  start = false;
}



let sec = 60;
let min = 1;

let Timer = document.createElement("div")
Timer.className = 'Timer'
let minute = document.createElement("p");
minute.innerText = min
minute.className = 'minute'
let p = document.createElement("p");
p.textContent = " : "
let seconds = document.createElement("p");
seconds.innerText = "00"

seconds.className = 'seconds'

main.insertBefore(Timer,containerCards )
// .insertBefore(сам элемент (Timer), элемент(containerCards), перед которым будет вставлен(Timer) )

Timer.append(minute);
Timer.append(p)
Timer.append(seconds)

let timer = function () {
//   chek;




// console.log(Timer, \t, minute, \t, seconds )

 
//   console.log("ff");
      console.log(`${min} : 00`)
  let TimerSec = setInterval(() => {
      console.log("начало")
      
      sec -= 1;
     
      if (min == 1) {
        console.log(1);
        // console.log(`${min} : 00`)
        min = 0;
        minute.innerText = min
      }
      // console.log(`${min} : ${sec}`)
      if(sec < 10){
        seconds.innerText = `0${sec}`
      }
      else{
        seconds.innerText = sec
      }
     

      console.log(sec, "sec");

    
    if (stopTimer == false || sec == 0) {
      clearInterval(TimerSec)
      
    }
    // console.log("sec", sec)
    // return sec
  }, 1000);


};



