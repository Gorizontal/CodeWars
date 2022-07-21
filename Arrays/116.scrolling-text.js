function scrollingText(text){
   let arr = [text.toUpperCase()];
  
   for(let i = 0 ; i< text.length; i++){
     let arrr = arr[i].split('');
     arrr.push(arrr[0]);
     arrr.shift();
     arr.push(arrr.join('')); 
   }
  
  arr.pop()
  return arr
}



  console.log(scrollingText('codewars'))

