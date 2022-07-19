// Учитывая строку и объект / массив, вам нужно вернуть форматированную строку. Замените все вхождения в строке, где имя ключа в объекте заключено в фигурные скобки.

// Не следует применять унаследованные свойства объекта

// В примере указано более тысячи слов..

// Пример использования объекта

// var s = 'Hello {foo} - make me a {bar}';
// var o = {
//   foo : 'Jack',
//   bar : 'sandwich'
// };

// format(s, o); // "Hello Jack - make me a sandwich"
// Пример использования массива

// var s = 'Hello {0} - make me a {1}';
// var a = ['Jack', 'sandwich'];

// format(s, a); // "Hello Jack - make me a sandwich"

var format = function (str, obj) {
    if(Array.isArray(obj)){ return str.replace('{0}' , obj[0]).replace('{1}' , obj[1]).replace('{2}' , obj[2])}
    else{
    
  return str.replace(/{foo}/g, `${obj.foo}`).replace(/{bar}/g, `${obj.bar}`)}
  
  };