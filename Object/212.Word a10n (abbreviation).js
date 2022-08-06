 function abbreviate(string) {

    function words(elem){
        if(elem.length >=4){
            return elem = elem.slice(0,1) + elem.slice(1, elem.length-1).length + elem.slice(elem.length-1)
          } else { return elem }
      }


      return string.split(' ').map(elem => {
        if(elem.includes(',')){
            return elem = elem.slice(0,1) + elem.slice(1, elem.length-2).length + elem.slice(elem.length-2)
        }

        if(elem.includes('-')){
           return elem.split('-').map(elem =>  words(elem)).join('-')
        } else  {return words(elem)}
      }).join(' ')

  }


  console.log(abbreviate("You need, need not want, to complete this code-wars mission"))


  



