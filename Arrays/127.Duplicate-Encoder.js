function duplicateEncode(word){
    return word.toUpperCase().split('').map((elem,index, arr) => {
        return arr.indexOf(elem) == arr.lastIndexOf(elem) ? '(' : ')'
        }).join('')
    
    }



console.log(duplicateEncode('1231'))
