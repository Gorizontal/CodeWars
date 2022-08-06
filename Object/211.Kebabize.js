function kebabize (str) {
    let a = str.split('').filter(elem => isNaN(elem)).map((elem) =>  {if(elem == elem.toUpperCase()){return elem = '-' + elem.toLowerCase()  } else { return elem}}).join('')
    let b =  a[0] == '-' ? a.slice(1) : a
    return b
}



console.log(kebabize('myCamelCased3String'))