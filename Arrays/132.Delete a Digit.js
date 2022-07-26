function deleteDigit(n) {

let arr = String(n).split('').map(elem => +elem)
let number = 0;
for(let i=0; i < arr.length; i++){
    let number2 = (arr.slice(0,i) + arr.slice(i+1)).split(',').join('')
    if(number2 > number){
        number = number2
    }
}
return number
  }


  console.log(deleteDigit(435824))

 