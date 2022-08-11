var runLengthEncoding = function(str){
    let count = 1
    return str.split('').reduce((res,elem,index,arr) => {  
        if(elem === arr[index+1]){count= count+1} else { res.push([count,elem]); count = 1}
        return res
    },[])

  }


  console.log(runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW")) 
  
//   [
//     [ 12, 'W' ],
//     [ 1, 'B' ],
//     [ 12, 'W' ],
//     [ 3, 'B' ],
//     [ 24, 'W' ],
//     [ 1, 'B' ],
//     [ 14, 'W' ]
//   ]