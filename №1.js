// // Задание 1
// x1 = 5;
// y1 = 8;
// x2 = 5;
// y2 = 5;
// side1 = y2 - y1;
// side2 = x2 -x1;
// S = side1 * side2;
// console.log(S);

// Задание 2
// a = 13.890123;
// b = 2.891564;
// n = 2;
// a = a % 1;
// b = b % 1;
// a = a * 10**n;
// b = b * 10**n;
// a = Math.floor(a);
// b = Math.floor(b);
// console.log(a ,">",b, a > b);
// console.log(a ,"<",b, a < b);
// console.log(a ,">=",b, a >= b);
// console.log(a ,"<=",b, a <= b);
// console.log(a ,"===",b, a === b);
// console.log(a ,"!=",b, a != b);

// Задание 3
n = 0;
m = 100;
min_num = Math.min(n,m);
max_num = Math.max(n,m);
console.log(min_num);
console.log(max_num);
rand_num = Math.round(Math.random()* (max_num - min_num))+min_num;
rand_num = Math.abs(Math.round(rand_num*2-1)-max_num);

console.log(rand_num);
