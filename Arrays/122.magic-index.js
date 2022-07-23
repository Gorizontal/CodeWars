function findMagic(arr){
    return +arr.filter((elem,index) => {return elem == index}) || -1;
  }


  console.log(findMagic([6,5,83,5,3,18]))