function getLengthOfMissingArray(arrayOfArrays) {
    if(arrayOfArrays == null ) { return 0}

    let arr = arrayOfArrays.map((elem) => elem ? elem.length : 0 ).sort((a,b) => a-b)
    if (arr.includes(0) ) {return 0}

    let arr2 = arr.reduce((res, item)=>{ return res += item },0)
    let res = 0
    for(let i=arr[0]; i <= arr[arr.length-1]; i++){
        res= res + i
      
    }
  
        return res- arr2  }
        

  

  

  console.log(getLengthOfMissingArray([ [3, 4],
    [2, 1, 0],
    [4],
    [1, 0, 4, 0],
    [0, 2, 1, 4, 3, 3],
    [4, 3, 3, 0, 1, 2, 3]]))

    