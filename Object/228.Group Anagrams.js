function groupAnagrams(arr){
    let objWords = {};
    for(let word of arr){
        let sortWord = word.split('').sort().join('')
        if(!objWords[sortWord]){
            objWords[sortWord]= [word]
        } else {objWords[sortWord].push(word)}
    }

    return Object.values(objWords)

}


console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));


