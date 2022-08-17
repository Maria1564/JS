let tegTh
let table = document.querySelector(".table")
const changeTable = function(arrStudent, arrTr){
  // console.log(arrTr, arrStudent)
  // arrTr.length
  
    for (let i = 0; i < arrStudent.length; i++) {
        let valueObj = Object.values(arrStudent[i]);
        for (let j = 0; j < valueObj.length; j++) {
          tegTh = arrTr[i].children[j]
          tegTh.innerText = valueObj[j]
          
        }
      }
    let arrNodeList = Array.prototype.slice.call(arrTr)
    let start = true
    // while(start){
      if(arrTr.length != arrStudent.length){
        arrNodeList.splice(arrStudent.length)
      }
   
    // console.log(arrNodeList)
    for(let i = 0; i < arrTr.length; i++){
      arrTr[i].remove()
    }
    arrTr = [...arrNodeList] //копирование массива
    // console.log(arrTr, "tr")

    for (let i = 0; i < arrStudent.length; i++) {
      let valueObj = Object.values(arrStudent[i]);
      // console.log(arrStudent.length, arrTr.length, "dd")
      table.append(arrTr[i])
      // console.log(valueObj)
      for (let j = 0; j < valueObj.length; j++) {
        tegTh = arrTr[i].children[j]
        // console.log(tegTh, table)
        tegTh.innerText = valueObj[j]
        
      }
    }

}

export default changeTable