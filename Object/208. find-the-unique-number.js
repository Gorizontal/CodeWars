function findUnique(numbers) {
    let obj = {}
    let result = []
   for(let i=0; i < numbers.length; i++){  
    obj[numbers[i]] ? obj[numbers[i]] = obj[numbers[i]] + 1 : obj[numbers[i]] = 1
   }
   for(let key in obj){
    if(obj[key] == 1){
        return parseInt(key)
    }}
  
}

console.log(findUnique([1,1,1,2,2,3,4,4,5,5,1,7]))



function findUniq(arr) {
    return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
  }

console.log(findUnique([1,1,1,2,2,3,4,4,5,5,1,7]))



function findUnique(numbers) {
    return numbers.reduce((a, b) => a ^ b);
  }

  console.log(findUnique([1, 8, 4, 4, 6, 1, 8]))
