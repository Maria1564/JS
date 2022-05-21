const containerCards = document.querySelector(".containerCards")
const main = document.querySelector(".main")

let arrValuesCards = [3, 5, 8, 3, 1, 1, 5, 8,];

//Создание карточек
function createCard(container){
    let card;
    let frontCard;
    let backCard;
    for (i = 0; i < 8; i++){
        card = document.createElement("div")
        card.className = "card"
        card.classList.add(i+1)
        container.append(card)

        frontCard = document.createElement('div')
        frontCard.className = "frontCard";
        frontCard.textContent = arrValuesCards[i]
        backCard = document.createElement('div')
        backCard.className = "backCard"
        card.append(frontCard)
        card.append(backCard)
    }
    let cards =  document.querySelectorAll(".card")
    
    let backCards =  document.querySelectorAll(".backCard") //?
    let frontCards = document.querySelectorAll(".frontCard") //?
    return {container, cards, frontCards, backCards};
}

const createdCard = createCard(containerCards)



let selectCard
let selectBackCard
let rightCards = []
let arrValue = []
let arrFind = []
let selectFrontCard
let start = false

function open(createdCard){
  
    createdCard.container.addEventListener("click", (event)=>{

        if (event.target.closest(".card")){
        
            selectCard = event.target.closest(".card")
   
       
            selectBackCard= selectCard.querySelector(".backCard") //задняя сторона выбранной карты
            arrFind.push(selectBackCard)

            selectFrontCard = selectCard.querySelector(".frontCard") //передняя сторона выбранной карты
            rightCards.push(selectFrontCard)

            arrValue.push(selectFrontCard.textContent) //добавление в массив значение выбранной карты
            selectBackCard.hidden = true
        }
        start = true;
    })
} 


const OpenCards =  open(createdCard) 


let totalRightCard;
function chek(){
    totalRightCard = 0
   let interval =  setInterval(function(){
       if(start){
            if(totalRightCard < 4){
                OpenCards
                if(arrValue[0] == arrValue[1] && arrValue.length != 0){
                    console.log(rightCards[0], rightCards)
                    for(let card of rightCards){
      
                        card.style.backgroundColor = "#00807d99"
            
                    }
                    arrValue.splice(0,2)
                    arrFind.splice(0,2)
                    totalRightCard++;
                  

                }
                else if (arrValue.length == 0){
                    console.log("не выбраны карточки")
                }
                else{
                    if(arrFind.length == 2 ){
                        arrFind[0].hidden = false
                        arrFind[1].hidden = false
                        
                        arrValue.splice(0,2)
                        console.log("Значения не равны")
                        arrFind.splice(0,2)
                      
                    }else{
               

                        arrFind[0].hidden = false;
                        arrValue.splice(0,1)
                        arrFind.splice(0,1)
                      
                    }
                   
                    rightCards.splice(0, rightCards.length)
                }
            }else{
                const btn = document.createElement("button")
                btn.className ="btnAgain"
                btn.textContent = "Начать заново"
                main.append(btn)
                btn.addEventListener("click", ()=>{
                    console.log("нажата кнопка btn")
                    startAgain(createdCard)
                    btn.remove()
                    chek()
                })
                clearInterval(interval)
            }
        }
    }, 3000)
}

chek()


function startAgain(allCards){
    for(let i = 0; i < allCards.backCards.length; i++ ){
        allCards.backCards[i].hidden = false;
        allCards.frontCards[i].style.backgroundColor = null
    }
    start = false;
}



