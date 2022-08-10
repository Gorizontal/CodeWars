function isValidIP(str) {
    
    return str.split('.').length === 4 ? str.split('.').every(elem => ( +elem >= 0 && +elem <= 255 && String(parseInt(elem)) === elem)) : false
  
    }

  console.log(isValidIP('\n1.2.3.4'))

 