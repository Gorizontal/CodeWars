function duplicateEncode(word){
    return word.toUpperCase().split('').map((elem,index, arr) => {
        return arr.lastIndexOf(elem) == arr.lastIndexOf(elem) ? '(' : ')'
        }).join('')
    
    }



console.log(duplicateEncode("Dind"))
