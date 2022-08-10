
// function incrementString (strng) {
//     let num = strng.split('');
//     for( let i =0 ; i< strng.length; i++){
//         if(!isNaN(strng[i]) && +strng[i] > 0){
//              num.splice(i, strng.length-2)
//              return num} 
//     }
//   }
//   console.log(incrementString('foo099'))





function incrementString (string) {
  const str = string.split('').filter(el => isNaN(+el)).join('')
  const numb = string.split('').filter(el => !isNaN(+el)).join('')
  const plusNumb = +numb + 1
  return str + plusNumb.toString().padStart(numb.length,0) 
}

console.log(incrementString('foo0099'))