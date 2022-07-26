function findEvenIndex(arr){
    for(let i=0; i < arr.length; i++){
    let resLeft = arr.slice(0,i).reduce((acc, elem)=>{return acc += elem}, 0)
    let resRight = arr.slice(i+1).reduce((acc, elem)=>{return acc += elem}, 0)
    if(resLeft == resRight){return i} 
}
return -1
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))