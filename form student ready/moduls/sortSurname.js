let sortedArrSurname = []

const sortSurname = function(arrStudent){
  
    for (let i = 0; i < arrStudent.length; i++){
        let surnameStudent = arrStudent[i].surname
        sortedArrSurname.push(surnameStudent)
    } 
    sortedArrSurname.sort()

    for (let  j = 0; j < arrStudent.length; j++){
        for( let s = 0; s < arrStudent.length; s++){
            let temp = arrStudent[j]
            let rightSurname = arrStudent.filter(item => item.surname == sortedArrSurname[j])
    
            if(rightSurname[0] == arrStudent[s]){
                arrStudent[j] = rightSurname[0]
                arrStudent[s] = temp
            } 
        }
     
    }
    sortedArrSurname = []
}


export default sortSurname