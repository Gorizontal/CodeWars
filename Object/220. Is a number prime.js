
function isPrime(num) {
    for(let i = 2; i < num; i++){
        if(num % i == 0) { return false}
    }

    return true
  }

  


//   function isPrime(num) {
//     let numSquare = Math.sqrt(num);
//     if(num < 2){
//       return false;
//     }
//     if(num == 2 || num == 3 || num == 5 || num == 7){
//       return true;
//     }
//     if(num % numSquare == 0){
//       return false;
//     }
//     for(let i = 2; i <= numSquare; i++){
//       if(num % i == 0){
//         return false;
//       }
//     }
//     for(let i = 2; i <= numSquare; i++){
//       if(num % i != 0){
//         return true;
//       }
//     }
//   }

console.log(isPrime(3))   // true
console.log(isPrime(5))   //  true
console.log(isPrime(7))   //  true
console.log(isPrime(9))   // false
console.log(isPrime(45))   // false

