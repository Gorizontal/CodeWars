const dataReverse = function(data){
    const arr = [];
    const count = data.length / 8;
    for (var i = 0; i < count; i++){
        arr.push(data.splice(0,8));
    }
   return arr.reverse().join().split(',').map(elem => elem = +elem)

  }


  console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2]))


  const f = [1,2,3,4,5]



  console.log(f.splice(0,2))