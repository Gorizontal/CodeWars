// Вы получаете массив чисел, возвращаете сумму всех положительных.

// Пример [1,-4,7,12]=> 1 + 7 + 12 = 20

// Примечание: если нечего суммировать, по умолчанию используется значение sum 0.


function positiveSum(arr) {
    const sum = arr.filter((elem) => elem > 0).reduce(((summ, elem) => summ + elem), 0);
    return sum;
}



console.log(positiveSum([1,2,3,-4,0,-5]))


