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
  const res = []

  if(len < 3) {
    return res
  }

  nums.sort((a, b) => a - b)

  for(let i = 0; i < len; i++) {
    if(nums[i] > 0) {
      return res
    }

    if(i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let left = i+1, right = len -1

    while(left < right) {
      const temp = nums[i] + nums[left] + nums[right]
      if(temp === 0) {
        res.push([nums[i], nums[left], nums[right]])
        while(left < right && nums[left] === nums[left + 1]) {
          left = left + 1
        }
        while(left < right && nums[right] === nums[right - 1]) {
          right = right - 1 
        }

        left = left + 1
        right = right - 1
      }else if(temp < 0) {
        left = left + 1
      }else{
        right = right - 1
      }
    }
  }

  return res
}

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))