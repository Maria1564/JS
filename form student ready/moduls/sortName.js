let sortedArrName = []

const sortName = function(arrStudent){
    console.log("arrStudent", arrStudent)

    for (let i = 0; i < arrStudent.length; i++){
        let nameStudent = arrStudent[i]["name"]
        sortedArrName.push(nameStudent)
    }

    sortedArrName.sort()
    console.log("ss", sortedArrName)
    for (let  j = 0; j < arrStudent.length; j++){
        for( let s = 0; s < arrStudent.length; s++){
            let temp = arrStudent[j]
            let rightName = arrStudent.filter(item => item.name == sortedArrName[j])
            if(rightName[0] == arrStudent[s]){
                arrStudent[j] = rightName[0]
                arrStudent[s] = temp
            } 
        }
    }
    sortedArrName = []
}

export default sortName