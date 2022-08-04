function anagrams(word, words) {
    let arr = []
   let a = words.map(elem => {return elem.split('').sort().join('')});
   let b = word.split('').sort().join('');
  
   for(let i = 0; i < a.length; i++){
    if(a[i] == b){
        arr.push(words[i])
    }
   }
   return arr
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))


function anagrams(word, words) {
   let a = word.split('').sort().join('');
  return words.filter((elem)=> {return a == elem.split('').sort().join('')})
  
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))

let arr = [1,1,2,2,3,3,4,4,5,6,1]
let arr_2 = arr.filter((item, index) => {
    console.log(arr.indexOf(item))
    return arr.indexOf(item) == index
});
console.log(arr_2);     