function zeroPlentiful(arr){
    let newarr = arr.map(elem => elem==0 ? elem : ',').join('').split(',').filter((elem) => elem)
    return newarr.every((elem) => elem.length >= 4) ? newarr.length : 0
}

  console.log(zeroPlentiful([0,0,0,0,0,2,0,0,0,0,1,0]))