"use strict"
let users = [
    {name: 'Василий', surname: 'Васильев'},
    {name: 'Иван', surname: 'Иванов'},
    {name: 'Пётр', surname: 'Петров'}
];

function filter(object, key, value){
    let result_arr = [];
    for (let i = 0; i< object.length; i++)
    {
        let user = object[i];
        if (user[key] === value){
            result_arr.push(user);
        }
    }
    return result_arr;
}

let result = filter(users, 'name', 'Иван');
console.log(result);