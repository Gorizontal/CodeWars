function digitalRoot(n) {
    let nArr = String(n).split('').reduce((res, elem) => {return res = res+ +elem}, 0)
    if(String(nArr).length >1){return digitalRoot(nArr)} else{ return nArr}
    
     }

  


console.log(digitalRoot(493193)) // 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2 


