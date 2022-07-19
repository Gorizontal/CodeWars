// Простой, учитывая строку слов, возвращает длину самого короткого слова (ов).

// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

function findShort(s){
    return s.split(' ').reduce((minWord, word) => {
     if(minWord.length > word.length) {
      return word
     } else { 
      return minWord
  }
  
    }, s.split(' ')[0]).length
    
  }

console.log(findShort("Let's travel abroad shall we q"))