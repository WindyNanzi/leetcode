/**
 * # 三数之和

[力扣题目链接](https://leetcode-cn.com/problems/3sum/)

## 描述
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。


## 示例
```javascript
threeSum([-1, 0, 1, 2, -1, -4]) // 输出：[[-1, -1, 2], [-1, 0, 1]]
threeSum([-1]) // 输出：[]
```
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const len = nums.length
  
  if(len < 3) {
    return []
  }

  nums.sort((a, b) => a - b)

  const arr = []

  // [-4, -1, -1, -1, -1, 0, 1, 2, 2, 2]
  for(let i = 0; i < len-1; i++) {
    if(nums[i] > 0) {
      console.log(arr)
      return arr
    }

    /** 
     * 计算过的元素就不需要再计算，
     * 这里的思想是和之前的做对比，我一开始想的是和后边的做对比...
     */
    if(i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let slow = i + 1, fast = len - 1


    
    while(slow < fast) {
      const res = nums[i] + nums[slow] + nums[fast]

      if(res === 0) {
        arr.push([nums[i], nums[slow], nums[fast]])
        
        while(nums[slow] === nums[slow + 1]) {
          slow ++
        }

        while(nums[fast] === nums[fast - 1]) {
          fast --
        }

        slow ++
        fast --
      } else if(res > 0) {
        fast -- 
      } else {
        slow ++
      }
    }
  }

  console.log(arr)
  return arr
}

threeSum([-4, -1, -1, -1, -1, 0, 1, 2, 2, 2] )