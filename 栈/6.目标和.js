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

findTargetSumWays([0,0,0,0,0,0,0,1],1)
findTargetSumWays([42,24,30,14,38,27,12,29,43,42,5,18,0,1,12,44,45,50,21,47],38)