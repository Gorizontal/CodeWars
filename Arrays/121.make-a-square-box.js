function box(n){
    let arr = ['-'.repeat(n)];
    for(let i = 1; i < n-1; i++){
    arr.push('-' + ' '.repeat(n-2) + '-')}
    arr.push('-'.repeat(n))
    return arr
  }

  console.log(box(10))