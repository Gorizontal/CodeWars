// Я дам вам целое число. Верните мне фигуру такой же длины и ширины, как целое число. Целым числом будет целое число от 1 до 50.

// Пример
// n = 3, поэтому я ожидаю, что квадрат размером 3x3 будет таким же, как показано ниже, в виде строки:

// +++
// +++
// +++

function generateShape(integer){
return ('+'.repeat(integer)+'\n').repeat(integer).trim()
}

console.log(generateShape(4))