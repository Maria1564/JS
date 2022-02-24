// let array = [
//     {value: "знач1", label: "значение1"},
//     {value: "знач2", label: "значение2"},
//     {value: "знач3", label: "значение3"}
// ];

let array = ["два", 4, {value: "знач2", label: "значение2"}, "grds"];


let value;
function dropdownList(arrayObj, value = 0){
    let select = document.createElement("select");
    let new_arr = [];
    for (i = 0; i < arrayObj.length; i++){
        if (typeof(arrayObj[i].value) === "undefined" && i === value){
            value = 0;
        };
        new_arr.push (document.createElement("option"));
        new_arr[i].textContent = arrayObj[i].label;
        new_arr[i].value = arrayObj[i].value ;//создание атрибута value в теге option и доюавление в него значения из объекта (где св-во value)
        select.append(new_arr[i]);
    }
    select.selectedIndex = value;
    return(select)
}


//Задание2
function createObj (array){
    for (i = 0; i < array.length; i++){
        if (typeof(array[i]) !== "object"){
            array[i] = {value: array[i], label: array[i]};
        }
    }
    return array
}
document.body.append(dropdownList(createObj(array), value))


