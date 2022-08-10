let arr1=[0,1,3,4,5]
let arr2=[1,0,3,2,1]

function findPair(arr1,arr2){
    let res = []
    let arr = arr1.map((elem, index) => { return  elem + arr2[index]}) // [1,1,6,6,6]

    let replicateElem = arr.filter((elem, index, arr) => arr.indexOf(elem) !== arr.lastIndexOf(elem)) // [1,1,6,6,6]
    
    let indexReplicate = arr.reduce((resa, item,index)=> {
           if (replicateElem.includes(item)) {
                resa.push(index)
           
           }
    return resa
    },[])
    
    for(let i=0; i< indexReplicate.length; i++){
        res.push([arr1[indexReplicate[i]],arr2[indexReplicate[i]]])
    }
 
    return res
  }



console.log(findPair(arr1,arr2))


let arr = [1,1,6,6,6,9]

const allMax = (arr) => {
    const max = Math.max(...arr);
    return arr.filter((el) => el === max);
  }

  console.log(allMax(arr))