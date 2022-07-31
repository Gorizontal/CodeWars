function sort(initialArray, sortingArray) {
   let arr = [];
   for(let i=0; i < initialArray.length; i++){
    arr[sortingArray[i]] = initialArray[i]
   }

   return arr
}


console.log(sort([1, 2, 3], [0, 2, 1]))

const arr = [1,2,3];
let e = 1

