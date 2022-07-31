function indexEqualsValue(a) {
    let start = 0;
    let end = a.length-1; 
    while(start < end){
        let center = Math.floor((start+end)/2)
        if(a[center] >= center ){
            end = center
        } else { 
            start = center + 1
        }
    }
    return a[end] === end ? end : -1}

  console.log(indexEqualsValue([-1,1,3,4,7]))

