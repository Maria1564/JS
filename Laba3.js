// // Задание1
// let password = "qaz-xsw";
// if (password.length >= 4 && (password.includes("-") || password.includes("_"))){
//     console.log(password, "надёжный пароль");
// }else{
//     console.log(password, "ненадёжный пароль");
// }

//Задание2
let name = "drrEt";
let surname = "CotWIn";

let first_letter_name = name.substr(0,1).toUpperCase();
let last_letters_name = name.substr(1).toLowerCase();
console.log(first_letter_name + last_letters_name );

let first_letter_surname = surname.substr(0,1).toUpperCase();
let last_letters_surname = surname.substr(1).toLowerCase();
console.log(first_letter_surname + last_letters_surname );


(name.substr(0,1) === first_letter_name && name.substr(1)===last_letters_name)
&& (surname.substr(0,1) === first_letter_surname && surname.substr(1)===last_letters_surname)?
console.log("Имя осталось без изменений"): console.log("Имя было преобразовано");


