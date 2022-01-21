// // Задание 1
// let x1 = 10;
// let y1 = 5;
// let x2 = 2;
// let y2 = 3;
// let side1 = y2 - y1;
// let side2 = x2 -x1;
// let S = side1 * side2;
// console.log("Площадь равна", S);

// //Задание 2
// let a = 13.890123;
// let b = 2.891564;
// let n = 2;
// a = a % 1;
// b = b % 1;
// a = a * 10**n;
// b = b * 10**n;
// a = Math.floor(a);
// b = Math.floor(b);
// console.log(a,">",b, a > b);
// console.log(a,"<",b, a < b);
// console.log(a,">=",b, a >= b);
// console.log(a,"<=",b, a <= b);
// console.log(a,"===",b, a === b);
// console.log(a,"!=",b, a != b);

// Задание 3
let n = 0;
let m = 100;
let min_num = Math.min(n, m);
let max_num = Math.max(n, m);
// console.log(min_num);
// console.log(max_num);
let rand_num = Math.round(Math.random()* (max_num - min_num))+min_num;
rand_num = Math.abs(Math.round(rand_num*2-1)-max_num);
console.log(rand_num);
