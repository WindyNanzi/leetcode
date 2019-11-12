/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
//  dfs 递归解决
var findTargetSumWays = function(nums, S) {
  let count = 0
  
  const dfs = (cur, index) => {
    if(index === nums.length){
      if(S === cur){
        count++
      }
      return
    }
    dfs(cur + nums[index], index + 1)
    dfs(cur - nums[index], index + 1)
  }

  dfs(0,0)
  console.log(count)
  return count
};

// findTargetSumWays([0,0,0,0,0,0,0,1],1)
// findTargetSumWays([42,24,30,14,38,27,12,29,43,42,5,18,0,1,12,44,45,50,21,47],38)

//  背包解决
var findTargetSumWays1 = function(nums, S){
  let sum = nums.reduce((a, b) => a+b)
  if((sum < S) || (sum + S)%2 !== 0){
    return 0
  }
  let P = (sum + S) / 2
  let dp = []
  for(let i = 0; i < P ; i++){
    dp.push(0)
  }
  // dp 主要是存储组成方法的数量，dp[0] = 1 即为组合成0的方法，只有1种，就是什么也不取。
  // dp[5] = 3 代表使总和加到5总共有3种方法
  // 当背包容量为0时，什么也不做，就满足背包满了的条件，所以可行解至少为1
  dp.unshift(1) //[1,0,0,...]
  
  // 问题转换为 在 num 数组中，有几种加法可以凑出和为 P 的背包问题
  // 一个容量为 P 的背包，num数组中的数值 中有几种塞法让其塞满
  debugger
  for(const num of nums){
    let cur = P
    for(cur; cur >= num; cur--){
      dp[cur] += dp[cur - num]
    }
  }

  console.log(dp[P])
  return dp[P]
}

// findTargetSumWays1([42,24,30,14,38,27,12,29,43,42,5,18,0,1,12,44,45,50,21,47],38)
findTargetSumWays1([2,3,4,5,6],18)