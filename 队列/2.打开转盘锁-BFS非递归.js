var openLock = function(deadends, target) {
  // 转为hash列表方便查找比较，可以将deadendsSet放入到visited中，减少判断
  const deadendsSet = new Set(deadends)
  // 边界处理
  if(deadendsSet.has('0000')) return -1
  if(target === '0000') return 0
  // 拨轮盘操作，向前一步，向后一步
  const options = [1,-1]

  // visited 用于保存已经访问过的密码还有生成这串密码时的最短路径
  // queue 为操作队列，用于逐一处理比较逻辑和生成新的比较字符串
  let visited = new Map([])
      queue = []
  
  // 初始化的值，默认0000为初始的值且路径为0
  queue.push([0,0,0,0])
  // 假如题目中还要求输出路径，此处应该形如：visited.set('0000',['0000'])，再进一步处理
  visited.set('0000',0)

  while(queue.length !== 0){
    let cur = queue.shift()
        curStr = cur.join('')
        pathLength = visited.get(curStr) + 1

    // 4个轮盘，所以4个数字都要尝试一遍 
    for(let i=0; i<4 ;i++){
      let temp = cur[i]
      // 每个操作执行一次：向前拨，向后拨
      for(const value of options){
        cur[i] = (temp + value + 10) % 10
        let compareStr = cur.join('')

        // 找到答案就立刻返回
        if(compareStr === target){
          console.log(pathLength)
          return pathLength
        }

        // 假如不是被锁定的密码，而且没有被访问过，就可以将其加入队列
        if(!deadendsSet.has(compareStr) && !visited.has(compareStr)){
          visited.set(compareStr, pathLength)
          queue.push([...cur])
        }
      }
      
      cur[i] = temp
    }
  }
  console.log(-1)
  return -1
};


openLock(["8887","8889","8878","8898","8788","8988","7888","9888"],'0000')