function arithmetic(a, b, operator){
    let oper = {
      "multiply" : '*',
       "divide" : '/',
       "subtract" : '-',
       "add" : '+'
    }
    return eval(a+ oper[operator] + b)
  }

  console.log( arithmetic(10, 2, "multiply") ) 