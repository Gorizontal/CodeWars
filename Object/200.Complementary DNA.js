function DNAStrand(dna){
    let a = {
      C : 'G',
      G : 'C',
      A : 'T',
      T : 'A'
    };
      
    return dna.split('').map((elem) => {
      return a[elem]; 
    }).join('');
  }

  console.log(DNAStrand("AATTCCGG"))