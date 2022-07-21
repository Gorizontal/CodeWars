// Время выиграть в лотерею!

// Учитывая лотерейный билет (билет), представленный массивом массивов с 2 значениями, вы должны узнать, выиграли ли вы джекпот.

// Пример билета:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// Для этого вы должны сначала подсчитать "мини-выигрыши" на вашем билете. В каждом подмассиве есть как строка, так и число. Если код любого из символов в строке совпадает с номером, вы получаете мини-выигрыш. Обратите внимание, что вы можете получить только один мини-выигрыш на подмассив.

// После того, как вы подсчитали все свои мини-выигрыши, сравните это число с другим введенным значением (выигрыш). Если ваша сумма больше или равна (выигрышу), верните "Победитель!". В противном случае верните "Проигравший!".

// Все входные данные будут в правильном формате. Строки на билетах не всегда одинаковой длины.

function bingo(ticket, win){
      return ticket.filter(arr => arr[0].split('').some(letter => letter.charCodeAt(0) == arr[1])).length >= win ?  'Winner!'  : 'Loser!';
    } 



console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1))