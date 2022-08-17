let sortedArrFaculity = []

const sortFaculity = function(arrStudent){
  
    for (let i = 0; i < arrStudent.length; i++){
        let faculityStudent = arrStudent[i].Faculity
        sortedArrFaculity.push(faculityStudent)
    } 
    sortedArrFaculity.sort()

    for (let  j = 0; j < arrStudent.length; j++){
        for( let s = 0; s < arrStudent.length; s++){
            let temp = arrStudent[j]
            let rightFaculity = arrStudent.filter(item => item.Faculity == sortedArrFaculity[j])
    
            if(rightFaculity[0] == arrStudent[s]){
                arrStudent[j] = rightFaculity[0]
                arrStudent[s] = temp
            } 
        }
     
    }
    sortedArrFaculity = []
}
export default sortFaculity