//функция для добавления студентов в localStorage
let localArrStudent = []

const addStudents = function (arrayStudents) {

    localArrStudent =  localStorage.getItem("localTableStudent")
    localArrStudent = JSON.parse(localArrStudent)

 if (localArrStudent == null){
   localArrStudent = []
 }
if(arrayStudents != null){
  for (let i = 0; i < arrayStudents.length; i++) {
  
    localArrStudent.push(arrayStudents[i])

  }
}
  localStorage.setItem("localTableStudent", JSON.stringify(localArrStudent))


}
// localStorage.clear()
export default addStudents;