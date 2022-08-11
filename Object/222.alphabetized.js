
function alphabetized(s) {
    return s.split('').sort((a,b) => {return a.toLowerCase().charCodeAt() - b.toLowerCase().charCodeAt()}).join(' ').replace(/\s/g, '')
  }


 console.log(alphabetized("The Holy Bible")) // "BbeehHilloTy"