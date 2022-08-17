function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
let sortedArrDateLearn = []

const sortStartLearn = function(arrStudent){
    for (let i = 0; i < arrStudent.length; i++){
        let dateStartLearn = arrStudent[i].StartLearn.substr(0, 4)
        console.log(dateStartLearn, i)

        dateStartLearn = dateStartLearn.substr(0, 10)
        dateStartLearn = Date.parse(dateStartLearn)
        sortedArrDateLearn.push(dateStartLearn)
    }

    sortedArrDateLearn.sort(compareNumeric)
    // console.log(sortedArrDateLearn)

    for (let  j = 0; j < arrStudent.length; j++){
        for( let s = 0; s < arrStudent.length; s++){
            let temp = arrStudent[j]
            let rightDateLearn = arrStudent.filter(item => item.StartLearn.substr(0,4) ==  new Date(sortedArrDateLearn[j]).toISOString().substr(0, 4))
            if(rightDateLearn[0] == arrStudent[s]){
                arrStudent[j] = rightDateLearn[0]
                arrStudent[s] = temp
            } 
        }
        // console.log(arrStudent[j])
    }
    sortedArrDateLearn = []
}

export default sortStartLearn;