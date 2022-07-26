function proofread (str) { 
    return str.toLowerCase().replace(/ie/g, 'ei').replace(/^.|(?<=\. )./g, elem => elem.toUpperCase())
  }
    
    
console.log(proofread ("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."));