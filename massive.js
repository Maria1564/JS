let nums = [];
// console.log(num)

//цикл для добавление 5 рандомных чисел в массив
for (i = 0 ; i < 5; i++){
    let num = Math.round(Math.random()*40)+(-20); //от -20 до 20
    nums.push(num);
}
console.log(nums);

//цикл для вывода чисел / 3
for (i = 0; i < nums.length; i++){
    if (nums[i] % 3 == 0){
        console.log(nums[i]," кратно 3");
    }
}

//сумма всех эл-ов массива
added = 0
for (i = 0; i < nums.length; i++ ){
    sum = added + nums[i];
    added = sum;
}
console.log("сумма чисел =", sum);

//кол-во чётных чисел
total_chet = 0 //подсчитывает кол-во чётных чисел
for (i = 0; i < nums.length; i++){
    if (nums[i] % 2 == 0){
        total_chet += 1;
    }
}
console.log("кол-во чётных чисел =", total_chet);

//кол-во положительных чисел
total_polozh = 0
for (i = 0; i < nums.length; i++){
    if (nums[i] > 0){
        total_polozh += 1;
    }
}
console.log("кол-во положительных чисел =", total_polozh);