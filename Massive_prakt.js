//Задание 3
let roadMins = [false, false, false, true, false, false, false, false, false, false];
let total_vzriv = 0;
for (i = 0; i < roadMins.length; i++){
    console.log(`танк переместился на ${i + 1}`);
    if (roadMins[i]===true && total_vzriv == 0 ){
        total_vzriv = total_vzriv + 1;
        console.log("танк повреждён");
    }else if (roadMins[i]===true && total_vzriv == 1){
        console.log("танк уничтожен");
        break;
    }
}


// //Задание 4
// let day_of_week = ["вторник", "среда", "четверг", "пятница", "суббота", "воскресенье", "понедельник"];
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ,31];
// let j =0 ;
// for (i = 0; i < nums.length; i++){   
//     console.log(`${nums[i]} января, ${day_of_week[j]}`);
//     j++;
//     if (day_of_week[j] =="понедельник"){
//         i++;
//         console.log(`${nums[i]} января, ${day_of_week[j]}`);
//         j = 0;
//     }
// }