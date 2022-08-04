function convertHashToArray(hash){
    let arr=[]
    for(let key in hash){
    arr.unshift([key, hash[key]])
  }
  return arr.sort()
}

console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}))



const convertHashToArray = o => Object.entries(o).sort();

console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}))