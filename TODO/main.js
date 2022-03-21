let container = document.querySelector(".container");


document.addEventListener("DOMContentLoaded", function (){
    function createAppTitle(){
        let h1 = document.createElement("h1");
        h1.textContent = "Список дел";
        container.append(h1);
        return h1;
    }
    createAppTitle()


    function createTodoItemForm(){
        let form = document.createElement("form");
        form.setAttribute("class", "input_group");
        form.classList.add("mb-3");
        container.append(form)

        let inp = document.createElement("input");
        inp.setAttribute("class", "form_control");
        inp.setAttribute("placeholder", "Введите новое дело");
        form.append(inp);

        let div = document.createElement("div");
        div.setAttribute("class", "input_group-append");
        form.append(div);

        let button = document.createElement("button");
        button.setAttribute("class", "btn");
        button.setAttribute("type", "button");
        button.classList.add("btn-outline-info");
        button.textContent = "Добавить дело";
        div.append(button);

        return form
    }
    createTodoItemForm()


    function createTodoList(){
        let ul = document.createElement("ul");
        ul.setAttribute("class", "list-group")
        container.append(ul);
        return ul
    }
    createTodoList()

    function createTodoItem(){
        let inp = document.querySelector(".form_control")
        let btn = document.querySelector(".btn");
        let ul = document.querySelector(".list-group")
     
        btn.addEventListener("click", ()=>{
            let valueInp = inp.value;
            let form_li = document.createElement("form");
            form_li.setAttribute("class", "form_li");
            ul.append(form_li)

            let li = document.createElement("li");
            li.setAttribute("class", "list-group-item")

   
            li.textContent = valueInp;
            form_li.append(li)

            let btn_ready = document.createElement("button");
            btn_ready.setAttribute("class", "btn_ready");
            btn_ready.setAttribute("type", "button");

            let btn_delete = document.createElement("button");
            btn_delete.setAttribute("class", "btn_delete")
            btn_delete.setAttribute("type", "button");

            btn_ready.textContent = "Готово";
            btn_delete.textContent = "Удалить";

            form_li.append(btn_ready);
            form_li.append(btn_delete)

            //кнопка "Готово"
            btn_ready.addEventListener("click", ()=>{
                if(li.style.backgroundColor == ""){
                    li.style.backgroundColor = "#1e98c7a8";
                }
                else{
                    li.style.backgroundColor = "";
                }
                
            })


            //кнопка "Удалить"
            btn_delete.addEventListener("click", (event)=>{
                let selectForm = event.target.closest(".form_li")
                if(event.target.closest(".form_li")){
                  let question = confirm("Точно хотите удалить?");
                  if(question){
                    selectForm.remove()
                  }
                } 
            })


        })
    }
    createTodoItem()
})


