function outed(meet, boss){
    meet[boss] = meet[boss]*2;
    let i = 0;
    let score = 0;
    for(let key in meet){
        score = score + meet[key];
        i++
    }
   
    return score / i <= 5 ?  'Get Out Now!' :  'Nice Work Champ!'
}


console.log(outed({"tim":2,"jim":6,"randy":6,"sandy":8,"andy":2,"katie":1,"laura":2,"saajid":7,"alex":5,"john":8,"mr":4}  , "mr"))



function outed(meet, boss) {
    let names = Object.keys(meet)
    let score = names.reduce((s,v) => s + meet[v], 0) + meet[boss]
    return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!'
  }