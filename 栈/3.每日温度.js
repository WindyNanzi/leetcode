/**
 * @param {number[]} T
 * @return {number[]}
 * 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
 */
var dailyTemperatures = function(T) {
  let len = T.length
  return T.map((value, index) => {
    let result = 0,
        i = index + 1
    for(i;i<len;i++){
      if(T[i] > value){
        result = i - index
        break
      }
    }
    return result
  })
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))

var dailyTemperatures1 = function(T){
  let stack = [],
      result = []
  
  for(let i = 0, len = T.length; i< len; i++){
    result.push(0)
    inner: while(stack.length !== 0){
      let item = stack.pop()
      if(item.value < T[i]){
        result[item.index] = i - item.index
      } else {
        stack.push(item)
        break inner
      }
    }
    stack.push({
      value:T[i],
      index: i,
    })
  }
  return result
}

console.log(dailyTemperatures1([73, 74, 75, 71, 69, 72, 76, 73]))