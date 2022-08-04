let list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];


function greetDevelopers(list) {
   return  list.map((elem) => {
        elem.greeting = `Hi ${elem['firstName']}, what do you like the most about ${elem['language']}?`
        return elem
    });
  }

  console.log(greetDevelopers(list1))