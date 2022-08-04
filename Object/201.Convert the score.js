function scoreboard(string) {
    let score = {
        'nil' : 0,
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'four': 4,
        'five': 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9,
        'ten' : 10
    }

    return string.split(' ').reduce((res,elem) => {
        res.push(score[elem]) 
        return res
    },[]).slice(-2)

  }

  console.log(scoreboard("The score is four nil"))

  let score = {
    one : 1,
    two : 2,
    three : 3,
    four: 4,
    five: 5,
    six : 6,
    seven : 7,
    eight : 8,
    nine : 9,
    ten : 10
}

console.log(score)