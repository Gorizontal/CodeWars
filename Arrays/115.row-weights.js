

function rowWeights(array){
   return  array.reduce((res ,num, index) => {
    index % 2 == 0 ? res[0] = res[0] + num : res[1] = res[1] + num; 
    return res}, [0,0])
  }

  console.log(rowWeights([100,50,100,50]))