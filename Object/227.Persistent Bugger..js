
function persistence(num) {
    let count = 0;
    while( String(num).length > 1) {
        num = String(num).split('').reduce((res, elem) => {return res *= elem},1)     
    }
    return count
 }

 console.log(persistence(4))