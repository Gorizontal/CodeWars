function hexStringToRGB(hexString)
{
  return {
            "r" : parseInt(hexString.slice(1, 3), 16),
            "g" : parseInt(hexString.slice(3, 5), 16),
            "b" : parseInt(hexString.slice(5, 7), 16)
          };
}

console.log(hexStringToRGB("#FF9933"))   

 let arr = [1,2,3]

 let [start, mid, end] = arr

 console.log(mid)