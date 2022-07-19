// Возвращает количество (количество) гласных в заданной строке.

// Мы будем рассматривать a, e, i, o, uкак гласные для этого ката (но неy).

// Строка ввода будет состоять только из строчных букв и / или пробелов.


function getCount(str) {
    return str.split('').filter((letter) => {
         return letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' 
    }).length;
}

  console.log(getCount('wwwe wen e ya'))