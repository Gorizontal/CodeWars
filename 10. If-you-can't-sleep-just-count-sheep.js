// если 3, тога вывод "1 sheep...2 sheep...3 sheep..."


var countSheep = function (num){
    let res =""
 for(i=1; i <= num; i++){
    res= res + `${i} sheep...`
   }
   return res
  }

  console.log(countSheep(10))

