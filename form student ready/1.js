// const container = document.querySelector(".container")
function createForm() {
  let form = document.createElement("form");
  form.className = "form";
  let title = document.createElement("p");
  title.className = "title_p"
  title.textContent = "Внесите нового студента";
  let inputName = document.createElement("input");
  inputName.placeholder = "Имя";
  let inputSurname = document.createElement("input");
  inputSurname.placeholder = "фамилия";
  let inputPatronymic = document.createElement("input");
  inputPatronymic.placeholder = "Отчество";
  let inputDate = document.createElement("input");
  inputDate.placeholder = "дата рождения";
  inputDate.type = "date";

  let inputStartLearn = document.createElement("input");
  inputStartLearn.placeholder = "год начала обучения";

  let inputFaculity = document.createElement("input");
  inputFaculity.placeholder = "факультет";

  const btnAddStudent = document.createElement("button");
  btnAddStudent.className = "btn";
  btnAddStudent.textContent = "Добавить";

  const btnReturnStudents = document.createElement("button");
  btnReturnStudents.className = "btn";
  btnReturnStudents.textContent = "Таблица";

  const wrongs = document.createElement("p");
  wrongs.className = "wrongsForm";

  form.append(
    title,
    inputName,
    inputSurname,
    inputPatronymic,
    inputDate,
    inputStartLearn,
    inputFaculity,
    btnAddStudent,
    btnReturnStudents,
    wrongs
  );

  return {
    form,
    wrongs,
    btnAddStudent,
    btnReturnStudents,
    inputName,
    inputSurname,
    inputPatronymic,
    inputDate,
    inputStartLearn,
    inputFaculity,
  };
}




function all() {
  const container = document.querySelector(".container");

  const Form = createForm();
  const worngsForm = Form.wrongs;

  container.append(Form.form);

  let elem_function = Object.values(Form);
  

  console.log(Form);

  Students = [];

  Form.form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  Form.btnAddStudent.addEventListener("click", () => {
    let textWrongs = "";
    //Проверка на валидность:
    //проверка на пустые поля
    for (i = 4; i < elem_function.length; i++) {
      console.log(elem_function[i].value);
      if (elem_function[i].value != elem_function[i].value.trim()) {
        elem_function[i].value = elem_function[i].value.trim();
        // console.log("Error")
      }
      if (elem_function[i].value == "") {
        textWrongs =
          textWrongs + `Зполните поле "${elem_function[i].placeholder}",\n `;
      }
    }

    //проверка даты рождения
    let BirthdayDate = Form.inputDate.value;
    let today = new Date().toISOString().substr(0, 10);
    const StartDate = new Date(1900, 0, 02).toISOString().substr(0, 10);
    if (
      Date.parse(BirthdayDate) < Date.parse(StartDate) ||
      Date.parse(BirthdayDate) > Date.parse(today)
    ) {
      textWrongs =
        textWrongs +
        `Дата рожения не входит в диапозон от ${StartDate} до ${today}\n `;
    }

    //проверка года начала обучения
    let todayYear = new Date().toISOString().substr(0, 4);
    let lernDate = Form.inputStartLearn.value;
    if (Number(lernDate) < 2000 || Number(lernDate) > Number(todayYear)) {
      textWrongs =
        textWrongs +
        `Год начала обучения не входит в диапозон от 2000 до ${todayYear}\n `;
    } else if (isNaN(Number(lernDate))) {
      textWrongs =
        textWrongs +
        `Вы ввели вместо числа строку в  поле "${Form.inputStartLearn.placeholder}" \n`;
    }

    if (textWrongs == "") {
      console.log("Всё ок");
      Students.push({
        name: Form.inputName.value,
        surname: Form.inputSurname.value,
        Patronymic: Form.inputPatronymic.value,
        Date: Form.inputDate.value,
        StartLearn: Form.inputStartLearn.value,
        Faculity: Form.inputFaculity.value,
      });

      localStorage.setItem("arrStudent", JSON.stringify(Students))

      for (input of Form.form) {
        input.value = null;
      }
 
    } else {
      worngsForm.innerText = textWrongs;
    }
    
  });

  Form.btnReturnStudents.addEventListener("click", () => {
    document.location.assign("./index2.html")
  })
 
}

all();
