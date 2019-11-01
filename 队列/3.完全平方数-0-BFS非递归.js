/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const queue = []  
        visited = new Map([])

  queue.push(n)
  visited.set(n,0) // 0 代表着第0队列
  while(queue.length !== 0){
    let num = queue.shift()
        length = visited.get(num) + 1

    const MAX = Math.floor(Math.sqrt(num))
    for(i=MAX; i >= 1; i--){
      let visitedNum = num - Math.pow(i,2)

      if (visitedNum === 0) {
        console.log(length)
        return length
      } else if(!visited.has(visitedNum)) {
        visited.set(visitedNum, length)
        queue.push(visitedNum)
      }
    }
  }

};

numSquares(13)
numSquares(12)
numSquares(16)