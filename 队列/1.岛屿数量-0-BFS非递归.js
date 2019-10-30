var numIslands = function(grid) {
  let count = 0
  /** 可以直接修改原来的grid,提高性能 即grid[i][j] = -1 用于标记查到的陆地*/
  const visited = new Set()
  const queue = []
  // 四个方向：右下左上
  const dections = [{i:0,j:1},{i:1, j:0},{i:0,j:-1},{i:-1, j:0}]

  // 为接壤的陆地打上标记
  const markLand = function(){
    while(queue.length !== 0){
      let visitedStr = queue.shift()
          i = parseInt(visitedStr.split('-')[0])
          j = parseInt(visitedStr.split('-')[1])
      
      /** 从4个方向判断是否存在陆地 */
      for(let dection of dections){
        let {i:iOffset, j:jOffset} = dection
        let newVisitedStr = `${i+iOffset}-${j+jOffset}`
        if(
          !visited.has(newVisitedStr) &&
          grid[i + iOffset] &&
          grid[i + iOffset][j + jOffset] === '1'
        ){
          queue.push(newVisitedStr)
          visited.add(newVisitedStr)
        }
      }
    }
  }

  for(let i = 0, lenY = grid.length; i<lenY; i++){
    inner:  for(let j = 0, lenX = grid[i].length; j<lenX; j++){
      let visitedStr = i + '-' + j
      if(visited.has(visitedStr) || grid[i][j] === '0'){
        continue inner
      } else {
        visited.add(visitedStr)
        queue.push(visitedStr)
        /** 找到’1‘就代表找到了岛屿，先将岛屿数+1，然后再为这个岛屿所有的陆地打上标记 */
        count++
        markLand()
      }
      
    }
  }

  console.log(visited)
  console.log(count)
  return count
};

numIslands([['1'],['1']])