function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
let sortedArrBirthdate = []

const sortBirthdate = function(arrStudent){

    for (let i = 0; i < arrStudent.length; i++){
        let birthdateStudent = arrStudent[i]["Date"]

        birthdateStudent = birthdateStudent.substr(0, 10)
        birthdateStudent = Date.parse(birthdateStudent)
        sortedArrBirthdate.push(birthdateStudent)
      
  
    }
    sortedArrBirthdate.sort(compareNumeric)

    for (let  j = 0; j < arrStudent.length; j++){
        for( let s = 0; s < arrStudent.length; s++){
            let temp = arrStudent[j]
            let rightBirthdate = arrStudent.filter(item => item.Date.substr(0,10) ==  new Date(sortedArrBirthdate[j]).toISOString().substr(0, 10))
            if(rightBirthdate[0] == arrStudent[s]){
                arrStudent[j] = rightBirthdate[0]
                arrStudent[s] = temp
            } 
        }
    }
    sortedArrBirthdate = []
}
export default sortBirthdate
