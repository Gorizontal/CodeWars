function capitalize(s){
    return [
        s.split('').map((elem, index, arr)=>{ return  index%2 == 0 ?  elem.toUpperCase() : elem} ).join(''), 
            s.split('').map((elem, index, arr)=>{ return  index%2 != 0 ?  elem.toUpperCase() : elem} ).join('')
        ]
  };


  console.log(capitalize("abcdef"))