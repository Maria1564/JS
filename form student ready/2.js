import addStudents from "./moduls/addStudents.js"
import sortName from "./moduls/sortName.js"
import sortPatronymic from "./moduls/sortPatronymic.js"
import sortSurname  from "./moduls/sortSurname.js"
import sortBirthdate from "./moduls/sortBirthdate.js"
import sortStartLearn from "./moduls/sortStartLearn.js"
import sortFaculity from "./moduls/sortFaculity.js"
import changeTable from "./moduls/changeTable.js"
import filter from "./moduls/filter.js"

let localArr = localStorage.getItem("arrStudent")
localArr = JSON.parse(localArr)

addStudents(localArr)
localStorage.setItem("arrStudent", null)

let newArrStud = localStorage.getItem("localTableStudent")
newArrStud = JSON.parse(newArrStud)

//отрисовка таблицы при открытии
let table = document.querySelector(".table");
for (let i = 0; i < newArrStud.length; i++) {
  let today = new Date().toISOString().substr(0, 4);
  let birthdate = new Date(newArrStud[i].Date).toISOString().substr(0, 4);
  let age  = Number(today) - Number(birthdate)
  newArrStud[i].Date = `${newArrStud[i].Date} (${age} лет)`


  let endLearn = Number(newArrStud[i].StartLearn )+ 4
  let startLearn =  Number(newArrStud[i].StartLearn)
  if(startLearn + 4 < today){
    newArrStud[i].StartLearn = `${newArrStud[i].StartLearn} - ${endLearn} (закончил)`
  }else if(startLearn+1 == today ||startLearn == today ){
    newArrStud[i].StartLearn = `${newArrStud[i].StartLearn} - ${endLearn} ( 1курс)`
  }else if(startLearn +2 == today){
    newArrStud[i].StartLearn = `${newArrStud[i].StartLearn} - ${endLearn} (2 курс)`
  }else if(startLearn+3 == today){
    newArrStud[i].StartLearn = `${newArrStud[i].StartLearn} - ${endLearn} (3 курс)`
  }else{
    newArrStud[i].StartLearn = `${newArrStud[i].StartLearn} - ${endLearn} (4 курс)`
  }
  
  let valueObj = Object.values(newArrStud[i]);
  let tr = document.createElement("tr");
  table.append(tr);
  tr.className = "tr"
  for (let j = 0; j < valueObj.length; j++) {
    let th = document.createElement("th");
    th.className = "th"

    th.innerText = valueObj[j];
    tr.append(th);
  }
}




let arrTr = document.querySelectorAll(".tr")
let mainTr = document.querySelector(".main_tr")



//Филтрация
let copeArrStudent = newArrStud.slice()//Копирование массива для фильтрации

let arrInp = document.querySelectorAll('.inp')
console.log(arrInp)

arrInp[0].addEventListener("input", ()=>{
  let inpValue = arrInp[0].value
  changeTable(filter(copeArrStudent, "name", inpValue), arrTr)
})

arrInp[1].addEventListener("input", ()=>{
  let inpValue = arrInp[1].value
  changeTable(filter(copeArrStudent, "surname", inpValue), arrTr)
})

arrInp[2].addEventListener("input", ()=>{
  let inpValue = arrInp[2].value
  changeTable(filter(copeArrStudent, "Patronymic", inpValue), arrTr)
})

arrInp[3].addEventListener("input", ()=>{
  let inpValue = arrInp[3].value
  changeTable(filter(copeArrStudent, "Date", inpValue), arrTr)
})

arrInp[4].addEventListener("input", ()=>{
  let inpValue = arrInp[4].value
  changeTable(filter(copeArrStudent, "StartLearn", inpValue), arrTr)
  
})

arrInp[5].addEventListener("input", ()=>{
  let inpValue = arrInp[5].value
  changeTable(filter(copeArrStudent, "Faculity", inpValue), arrTr)
})



let arr_th= document.querySelectorAll(".main_th")

//Сортировка
for(let i = 0; i < arr_th.length; i++){
  let p = arr_th[i].childNodes[1]
  p.addEventListener("click", (event)=>{
    if(p.innerText == "Имя ⬆⬇"){
      sortName(newArrStud)
      changeTable(newArrStud, arrTr)
    }else if(p.innerText == "Фамилия ⬆⬇"){
      sortSurname(newArrStud)
      changeTable(newArrStud, arrTr)
    }else if(p.innerText == "Отчество ⬆⬇"){
      sortPatronymic(newArrStud)
      changeTable(newArrStud, arrTr)
    }else if(p.innerText == "Год рождения ⬆⬇"){
      sortBirthdate(newArrStud)
      changeTable(newArrStud, arrTr)
    }else if(p.innerText == "Год обучения ⬆⬇"){
      sortStartLearn(newArrStud)
      changeTable(newArrStud, arrTr)
    }else{
      sortFaculity(newArrStud)
      changeTable(newArrStud, arrTr)
    }
  })

}

const container = document.querySelector(".container")


//кнопка Сброс
for(let i = 0; i < arr_th.length; i++){
  console.log()
  let btn_clear_inp = arr_th[i].childNodes[3].childNodes[3]
  btn_clear_inp.addEventListener("click", (event)=>{
    let selectTh = event.target.closest(".main_th")
    let selectChildInp =selectTh.querySelector(".inp") 
    if(selectChildInp.value != ""){
      selectChildInp.value = ""
      changeTable(newArrStud, arrTr)
    }
  })

}

//кнопка вернутся к форме
let btn_form = document.createElement("button")
btn_form.className = "btn_form"
btn_form.textContent = "форма"
container.append(btn_form)

btn_form.addEventListener("click", ()=>{
  document.location.assign("./index.html")
})

