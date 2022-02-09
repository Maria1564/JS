function calculate(sum_korzini, total_products, promokod = null){
    if (promokod === "ДАРИМ300"){
        sum_korzini = sum_korzini - 300;
        if (sum_korzini < 300){
            sum_korzini = 0;
        }
    }
    if (total_products >= 10){
        sum_korzini = sum_korzini - (sum_korzini/100 * 5);
    }
    if (sum_korzini > 50000){
        sum_korzini = sum_korzini - ((sum_korzini - 50000) / 100 * 20);
    }
    if (promokod === "СКИДКА15" && sum_korzini >= 20000){
        sum_korzini = sum_korzini - (sum_korzini/100 * 15);
    }
    return sum_korzini;
}

console.log(calculate(10000, 20));