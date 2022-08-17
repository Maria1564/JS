let sortedArrPatronymic = []

const sortPatronymic = function(arrStudent){
  
    for (let i = 0; i < arrStudent.length; i++){
        let patronymicStudent = arrStudent[i].Patronymic
        sortedArrPatronymic.push(patronymicStudent)
    } 
    sortedArrPatronymic.sort()

    for (let  j = 0; j < arrStudent.length; j++){
        for( let s = 0; s < arrStudent.length; s++){
            let temp = arrStudent[j]
            let rightPatronymic = arrStudent.filter(item => item.Patronymic == sortedArrPatronymic[j])
    
            if(rightPatronymic[0] == arrStudent[s]){
                arrStudent[j] = rightPatronymic[0]
                arrStudent[s] = temp
            } 
        }
     
    }
    sortedArrPatronymic = []
}

export default sortPatronymic