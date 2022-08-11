// Учитывая список целых Aчисел, для каждой пары целых (first, last)чисел в списке rangesвычислите сумму значений Aмежду индексами firstи last(оба включительно) и верните наибольшую результирующую сумму.

// Пример
// A = [1, -2, 3, 4, -5, -4, 3, 2, 1]
// ranges = [(1, 3), (0, 4), (6, 8)]

// result = 6
// Для ranges[0] = (1, 3)суммы A[1] + A[2] + A[3] = 5
// Для ranges[1] = (0, 4)суммы A[0] + A[1] + A[2] + A[3] + A[4] = 1
// Для ranges[2] = (6, 8)суммы A[6] + A[7] + A[8] = 6
// Наибольшая сумма равна 6

// Примечания
// Список rangesникогда не будет пустым;
// Это версия вызова, вы должны реализовать эффективный алгоритм, чтобы избежать тайм-аута;

// решение с https://www.youtube.com/watch?v=JrMv30JTUxA&t=790s



function maxSum(arr,range){
    const sumOn = [];
    for(let i=0; i < arr.length; i ++){
        sumOn[i] = (sumOn[i-1] || 0) + arr[i]
    }

    let max = -1000000
    for(let i=0; i < range.length; i++) {
        
        const [start, end] = range[i];
        const sum = sumOn[end] - (sumOn[start-1] || 0)
        if( sum > max){ max = sum}
    }
    
    return max
  }


  console.log(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]])) //6
  console.log(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3]])) //5
  console.log(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,4],[2,5]])) //0