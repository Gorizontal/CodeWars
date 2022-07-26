function sortArray(array) {
        let arr = array.filter( elem =>  elem % 2 ).sort((a,b) => a-b)
        return array.map((elem) => {return !(elem % 2) ? elem : arr.shift() })
  }

  console.log(sortArray([5, 3, 2, 8, 1, 4]))