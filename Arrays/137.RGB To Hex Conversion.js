function rgb(r, g, b){
    if(r <= 0){  r = '00'} else if(r > 255) {  r = 'ff' } else {r = r.toString(16); r.length == 1 ? r = '0'+ r : -1};
    if(g <= 0){  g = '00'} else if(g > 255) {  g = 'ff' } else {g = g.toString(16); g.length == 1 ? g = '0'+ g : -1};
    if(b <= 0){  b = '00'} else if(b > 255) {  b = 'ff' } else {b = b.toString(16); b.length == 1 ? b = '0'+ b : -1};
    return ("" + r + g + b).toUpperCase()
  }

  console.log(rgb(297,8,181))

