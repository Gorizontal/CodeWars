function predicate (x) {
    return Math.abs(x) % 2 === 0;
  }


function span(arr) {

let i = 0 ;
while (i < arr.length && predicate(arr[i])){
  i++
}

return [arr.splice(0,i), arr.splice(i)]
  }




  console.log(span([2,4,6,1,4,8]))

