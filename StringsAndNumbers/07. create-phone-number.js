// Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), который возвращает строку из этих чисел в виде номера телефона.

// Пример
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


function createPhoneNumber(number) {
return(`(${number[0]}${number[1]}${number[2]}) ${number[3]}${number[4]}${number[5]}-${number[6]}${number[7]}${number[8]}${number[9]}`)
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) )