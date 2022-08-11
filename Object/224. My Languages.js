function myLanguages(results) {
    let arr = []
    for(let key in results){
        if(results[key] >= 60){
            arr.push(key)
        }
    }
    return arr.sort((a,b) => {return results[b] - results[a]})
}

console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 165}))