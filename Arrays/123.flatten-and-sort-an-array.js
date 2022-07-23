function flattenAndSort(array) {
// let arr = []    
// for(let i =0; i< array.length; i++){
//   arr = arr.concat(array[i])
// }
// return arr

return [].concat(...array).sort((a,b) => a-b)
  }


  console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))