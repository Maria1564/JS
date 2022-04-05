(function () {
  //Добавление заголвока
  function createAppTitle(h1) {
    let h1Text = document.createElement("h1");
    h1Text.textContent = h1;
    return h1Text;
  }

  //Добавление формы, строки ввода и кнопки
  function createTodoForm() {
    let form = document.createElement("form");
    form.setAttribute("class", "input_group");
    form.classList.add("mb-3");

    let inp = document.createElement("input");
    inp.setAttribute("class", "form_control");
    inp.setAttribute("placeholder", "Введите новое дело");

    let div = document.createElement("div");
    div.setAttribute("class", "input_group-append");

    let button = document.createElement("button");
    button.setAttribute("class", "btn");
    button.classList.add("btn-outline-info");
    button.textContent = "Добавить дело";

    form.append(inp);
    form.append(div);
    div.append(button);

    return { form, inp, button };
  }

  //Создание тега ul для списка
  function createTodoList() {
    let ul = document.createElement("ul");
    ul.setAttribute("class", "list-group");
    return ul;
  }

  //Добавление элемента списка и двух кнопак (готовоб, удалить)
  function createTodoItem(valueLi) {
    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    li.textContent = valueLi;

    let div_btn = document.createElement("div");
    div_btn.setAttribute("class", "div_li_btn");

    let btn_ready = document.createElement("button");
    btn_ready.setAttribute("class", "btn_ready");

    let btn_delete = document.createElement("button");
    btn_delete.setAttribute("class", "btn_delete");

    btn_ready.textContent = "Готово";
    btn_delete.textContent = "Удалить";

    div_btn.append(li);
    div_btn.append(btn_ready);
    div_btn.append(btn_delete);

    return { li, btn_ready, btn_delete, div_btn };
  }


  let arrValues = [];
  let arrDones = [];
  
  function createApp(text, array_tasks = [], key, doneKey) {

    let container = document.querySelector(".container");
    let h1 = text;
    const title = createAppTitle(h1);
    container.append(title);

    const todoForm = createTodoForm();
    container.append(todoForm.form);

    const todoList = createTodoList();
    container.append(todoList);

      //кнопка "Готово"
      let ready = (todoItem, arrValues,  arrDones)=>{
       
        todoItem.btn_ready.addEventListener("click", () => {
          if (todoItem.li.style.backgroundColor == "") {
            todoItem.li.style.backgroundColor = "#1e98c7a8";
          } else {
            todoItem.li.style.backgroundColor = "";
          }

          let textLi = todoItem.li.textContent;
          let j = 0;

          while(j < arrValues.length){
            if(textLi == arrValues[j]){
              if(arrDones[j] == false){
                arrDones[j] = true
              }else{
                arrDones[j] = false
              }
              localStorage.setItem(doneKey, JSON.stringify(arrDones))
              break
            }
            j++
          }
        });
      } 


   


      // кнопка "Удалить"
      let delete_ = (todoItem, arrVal = [], arrDones)=>{
    
        todoItem.btn_delete.addEventListener("click", (event) => {
          let selectForm = event.target.closest(".div_li_btn");
          if (event.target.closest(".div_li_btn")) {
            //JSON.parse(stringifyArr)  массив элементов находящихся в localSorage
            let question = confirm("Точно хотите удалить?");
            if (question) {

               selectForm.remove();

              if(arrVal.length != 0){
                let j = 0
                while(true){
                //убирает значение из массива, которое было удалено из списка
                  if(todoItem.li.textContent ==  arrVal[j]){
           
                    arrVal.splice([j], 1)
                    arrDones.splice([j], 1) //.splise()- удаляет элемент из массива по индексу, не оставляя пустого места
            
                    stringifyArr = JSON.stringify(arrVal)
                    localStorage.setItem(key, stringifyArr)

                    localStorage.setItem(doneKey, JSON.stringify(arrDones))
                    break
                  }
                  j++
                }
             } 
            }
          }
        });
      }

 
      let stringifyArr
      let valueInp 

      //Задачи, которые сразу появляются на странице 
      let i = 0;
      while (i < array_tasks.length) {
        let task = createTodoItem(array_tasks[i].name);
        if(array_tasks[i].done != false){
          task.li.style.backgroundColor = "#1e98c7a8";
        }

        todoList.append(task.div_btn);
        ready(task)
        delete_(task)
        
        i++;
      }
 

      //Задачи из LocalStorage отображающиеся после перезагрузки
      //вначале проверка на то, имеются ли сохранённые в locflStorage значения
      if(arrValues != undefined && localStorage.getItem(key) != null){

        arrValues = JSON.parse(localStorage.getItem(key))
        arrDones = JSON.parse(localStorage.getItem(doneKey))
      
        let j = 0;
        while(j < arrValues.length){
          let task = createTodoItem(arrValues[j])
        
          if(arrDones[j] != false){
            
            task.li.style.backgroundColor = "#1e98c7a8";
          }
          todoList.append(task.div_btn)

          ready(task, arrValues, arrDones)
          delete_(task, arrValues, arrDones)

          j++
        }
      }
     



    todoForm.button.disabled = true;

    //Проверка значений в inpute
    setInterval(() => {
      if (todoForm.inp.value == "") {
        todoForm.button.disabled = true;
      } else {
        todoForm.button.disabled = false;
      }
    }, 300);

    

     //добавление задач в TODO List
    todoForm.form.addEventListener("submit", (event) => {
      event.preventDefault();
     
      valueInp = todoForm.inp.value;

      const todoItem = createTodoItem(valueInp);
      todoList.append(todoItem.div_btn);
      todoForm.inp.value = null;
     
      ready(todoItem, arrValues, arrDones)
      delete_(todoItem, arrValues, arrDones)

      arrValues.push(valueInp)
      arrDones.push(false)
    
      stringifyArr = JSON.stringify(arrValues)
      if(localStorage.setItem(key, stringifyArr) || stringifyArr) {
        if(localStorage.setItem(doneKey, JSON.stringify(arrDones)) || JSON.stringify(arrDones)){
          return
        }
      }
    });

  }

  // localStorage.clear()
  window.createApp = createApp;
})();
