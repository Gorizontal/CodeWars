function dbSort(a){
    let arrStr = a.filter((elem) => typeof(elem) == 'string').sort()
    let arrNumber = a.filter((elem) => typeof(elem) == 'number').sort((a,b) => {return a-b})
    return [...arrNumber, ...arrStr]
 }

 console.log(dbSort([14,32,3,5,5,0]))