// Напишите функцию insert_dash(num)/ insertDash(num)/InsertDash(int num), которая будет вставлять тире ('-') между каждыми двумя нечетными цифрами в num. Например: если num равно 454793, результат должен быть 4547-9-3. Не считайте ноль нечетной цифрой.

// Обратите внимание, что число всегда будет неотрицательным (>= 0).



function insertDash(num) {
let newArr = [];
let a =num.toString().split('');
for ( let i =0; i < a.length; i++){
    if( a[i]%2 !=0 && a[i+1]%2 !=0 ){
        newArr.push(a[i]);
        newArr.push('-');

    } else {
        newArr.push(a[i])}  
} 
if(newArr[newArr.length-1] == '-'){newArr.pop()}
return newArr.join('')
 }

 
 console.log(insertDash(454793))