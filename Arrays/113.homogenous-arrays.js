// Учитывая двумерный массив, верните новый массив, который переносит только те массивы из оригинала, которые не были пустыми и элементы которых имеют один и тот же тип (т. Е. Однородны). Для простоты массивы внутри массива будут содержать только символы и целые числа.

// Пример:

// Учитывая [[1, 5, 4], [' a', 3, 5], ['b'], [], ['1', 2, 3]], ваша функция должна вернуть [[1, 5, 4], [' б']].

// Добавление:

// Пожалуйста, имейте в виду, что для этого ката мы предполагаем, что пустые массивы не являются однородными.

// Результирующие массивы должны располагаться в том порядке, в котором они были изначально, и их значения не должны изменяться.

// Неявное приведение типов не допускается. Подмассив [1, '2'] будет считаться незаконным и должен быть отфильтрован.

function filterHomogenous(arrays) {
 return arrays.filter(arr => {
    return arr.every((elem) => (typeof(elem) == typeof(arr[0])))  && arr.length
 });
}


  console.log(filterHomogenous([[1, 5, 4], [' a', 3, 5], ['b'], [], ['1', 2, 3]]))


