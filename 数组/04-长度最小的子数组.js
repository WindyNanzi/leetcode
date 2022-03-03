/**
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。
 * 如果不存在符合条件的子数组，返回 0。
 * 
 * 示例：
 * 
 * 输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  // 定义 dp[i] 为下标为 i 时，符合包含nums[i]元素的最小子数组长度
  // dp[i] = min(dp[i-1], dp[i])
  // dp[0] = nums[i] >= target ? 1 : 0

  const dp = []
  const len = nums.length
  if(nums[0] >= target) {
    return 1
  }else {
    dp.push(0)
  }

  for(let i = 1; i < len; i++) {
    if(nums[i] >= target) {
      return 1
    }
    let j = i, count = 0, total = 0
    while(j >= 0 && total < target) {
      total += nums[j]
      j--
      count ++
    }

    if(total < target) {
      count = 0
    }

    dp[i] = dp[i - 1] === 0 ? count : Math.min(count, dp[i - 1])
  }

  return dp[len - 1]
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))


var minSubArrayLen1 = function(target, nums) {
  // 定义 dp[i][0] 为下标为 i 时，符合包含nums[i]元素的最小子数组长度
  // 定义 dp[i][1] 为下标为 i 时，数组和最接近 target 的数组的和

  //则有：dp[i - 1][1] + num[i] >= target 时，dp[i][0] = Math.min(dp[i-1][0], dp[i][0]), dp[i-1][1] = sum(...)
  //  dp[i - 1][1] + num[i] < target 时， dp[i][0] = 0, dp[i][1] = dp[i-1][1] + nums[i]

  // dp[0][0] = nums[0] >= target ? 1 : 0
  // dp[0][1] = nums[0]

  const len = nums.length

  const dp = Array.from(new Array(len), () => [])
  if(nums[0] >= target) {
    return 1
  } else {
    dp[0][0] = 0
    dp[0][1] = nums[0]
  }

  for(let i = 1; i < len; i++) {
    if(nums[i] >= target) {
      return 1
    }
    const val = dp[i-1][1] + nums[i];
    if(val < target) {
      dp[i][0] = 0
      dp[i][1] = val
    } else {
      let minLength = 0, total = 0, j = i
      while(j >= 0 && total < target) {
        total += nums[j]
        minLength ++
        j --
      }

      dp[i][0] = dp[i-1][0] === 0 ? minLength : Math.min(dp[i-1][0], minLength)
      dp[i][1] = total
    }
  }

  return dp[len - 1][0]
}

console.log(minSubArrayLen1(7, [2,3,1,2,4,3]))


var minSubArrayLen2 = function(target, nums) {
  const len = nums.length
  let left = 0, right = 0, sum = 0, res = len + 1

  while(right < len) {
    sum += nums[right]
    if(sum >= target) {
      while(sum - nums[left] >= target) {
        sum -= nums[left]
        left ++
      }
      res = Math.min(res, right - left + 1)
      
      if(res === 1) {
        return 1
      }
    }
   

    right ++
  }

  return res === len + 1 ? 0 : res;
}

console.log(minSubArrayLen2(7, [2,3,1,2,4,3]))

/** 拓展  */

/**
 * 水果成篮
 * 
 * https://leetcode-cn.com/problems/fruit-into-baskets/
 * 
 * 原题目不太容易理解，换个描述方式：
 * 给定一个数组，找出其中最长的子数组的长度。这个子数组应该满足这个条件：包含至多两种不同的值。
 * 示例：
 * 输入 fruits = [2,3,3,2,4,3] 输出：4 解释：子数组 [2,3,3,2] 是该条件下的长度最小的子数组。
 * 输入 fruits = [3,3,3,1,2,1,1,2,3,3,4] 输出：5 解释：子数组 [1,2,1,1,2] 是该条件下的长度最小的子数组。
 */


/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  // 本题采取和上题一样的，快慢指针
  // repeat 用来记录重复出现的元素长度
  let left = 0, max = 0, repeat = 1
  const len = fruits.length
  let types = []

  for(let right = 0; right < len; right++) {
    if(types.includes(fruits[right])) {
      repeat = fruits[right] === fruits[right - 1] ? repeat + 1 : 1;
      continue
    }
    if(types.length < 2) {
      types.push(fruits[right])
      // 前面几个元素不计入
      repeat = 1
    } else {
      max = Math.max(max , right - left)
      types = [fruits[right - 1], fruits[right]]
      left = right - repeat
      repeat = 1
    }
  }

  return Math.max(max, len - left)
};

// [0,1,1,0,6,6,4,4,6]
// [1,0,1,4,1,4,1,2,3]
console.log('水果成篮：', totalFruit([3,3,3,1,2,1,1,2,3,3,4]))