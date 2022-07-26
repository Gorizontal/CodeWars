function list(names){
    return  names.map((item) => {return item = item['name']}).join(', ').replace(/,(?!.*,)/gmi, " &")
  }


  console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]))