function binSearch(arr, toSearch) {
    let start = 0 ;
    let end = arr.length - 1;

    while(start <= end){
        let cen = Math.floor((end+start)/2) ;
        if(toSearch == arr[cen]){
            return cen 
        } else if ( toSearch < arr[cen] ) {
            end = cen-1 ;
        } else if ( toSearch > arr[cen] ) { start = cen+1  } else {return -1}}

    return -1
  }

  console.log(binSearch([1,2,3,4,5,6,7,8,9,10], 9))