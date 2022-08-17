let arrFilter = []
let newArr = []

let filter = function(arrStudent, key, inpValue){
 newArr= []
  inpValue = inpValue.toLowerCase()
  for(let i = 0; i <arrStudent.length; i++ ){
    if(arrStudent[i][key].toLowerCase().includes(inpValue)){
      arrFilter.push(arrStudent[i][key])
      
    }
  }

  for (let j = 0; j <arrStudent.length; j++ ){
    for(let s = 0; s < arrFilter.length; s++){
      if(arrStudent[j][key] == arrFilter[s]){
        newArr.push(arrStudent[j])
      }
    }
  }


 
  arrFilter  = []
  if(newArr.length >=2){
    for(let i = 0; i < newArr.length; i++){
      let temp = newArr[i]
      if(temp ==  newArr[i+1]){
        newArr.splice(i+1, 1)
        if(temp ==  newArr[i+1]){
          newArr.splice(i+1, 1)
          if(temp ==  newArr[i+1]){
            newArr.splice(i+1, 1)
            if(temp ==  newArr[i+1]){
              newArr.splice(i+1, 1)
            }
          }
        }
      }
    }
  }

  return newArr
}

export default filter