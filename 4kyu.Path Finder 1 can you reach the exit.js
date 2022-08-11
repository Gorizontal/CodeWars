// Задача
// Вы находитесь на позиции [0, 0] в лабиринте NxN и можете двигаться только в одном из четырех основных направлений (т.Е. на север, Восток, Юг, Запад). Вернитесьtrue, если сможете достичь позиции [N-1, N-1] или falseиным образом.

// Отмечены пустые позиции..
// Стены отмеченыW.
// Позиции начала и выхода пусты во всех тестовых примерах.

// решение с https://www.youtube.com/watch?v=JrMv30JTUxA&t=790s

function pathFinder(maze){
    let mazeArray = maze.split('\n').map(e => e.split(''))
    let startX = 0;
    let startY = 0;

    let cellsToProcess = [
        [startX, startY]
    ]

    while(cellsToProcess.length){
        
            let [x, y] = cellsToProcess.shift();
            mazeArray[x][y] = 'V';
            [[x+1,y], [x-1,y], [x, y+1], [x, y-1]].forEach(([nextX, nextY])=> {
                if((mazeArray[nextX] || [])[nextY] === '.'){
                    cellsToProcess.push([nextX,nextY])
                }
            })
        
    }
    

    return mazeArray[mazeArray.length-1][mazeArray.length-1] === 'V'
  }


console.log(pathFinder(
`.w....
......
......
......
...w..
......`)) // true



console.log(testMaze(
    `......
    ......
    ......
    ......
    .....W
    ....W.`))    // false 

    let arr = ['1','2', '3']

    let [x,y] = arr.shift()

    console.log(arr)