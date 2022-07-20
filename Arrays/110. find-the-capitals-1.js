// Напишите функцию, которая принимает одну строку (word) в качестве аргумента. Функция должна возвращать упорядоченный список, содержащий индексы всех заглавных букв в строке.

// Пример
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );


var capitals = function (str) {
    // let arr =[]
    // str.split('').filter((letter, index   )=>{ if(letter == letter.toUpperCase()) { return arr.push(index)}})
    // return arr

    return str.split('').map((letter, index )=>{return letter == letter.toUpperCase() ? index : ' ' }).filter(index => typeof(index) == 'number')
};



console.log(capitals('CodEWaRs'))