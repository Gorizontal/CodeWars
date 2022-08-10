function alphabeticalCompare(value1, value2) {
    if (String(value1) < String(value2)) {
      return -1;
    } else if (String(value1) > String(value2)) {
      return 1;
    } else {
      return 0;
    }
  }
  

function frequency(arr, options) {
    let obj = {}
    for(let elem of arr) {
        if(obj[elem] == undefined){
            obj[elem] = 1
        } else { obj[elem]++}
    }

    return Object.entries(obj)
   
}



console.log(frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna']))





