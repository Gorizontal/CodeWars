

function arrayPlusArray(arr1, arr2) {
    return [...arr1,...arr2].reduce((res, item)=>{return res = res+item}, 0) 
  }


  console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]))