/**
 * 给定一个整数数组 nums 和一个目标值 target，请
 * 你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let res = []
  
  for(let i = 0, len = nums.length; i < len; i++){
    let another = target - nums[i]
    let anotherIndex = -1
    if(another === nums[i]){
      anotherIndex = nums.indexOf(another,i+1)  //使用了indexOf这个api，所以无法准确预估时间复杂度
    }else{
      anotherIndex = nums.lastIndexOf(another)
    }    
    if(anotherIndex !== -1){
      res.push(i,anotherIndex)
      break
    }
  }
  console.log(res)
  return res
}



/** 利用键值对的方法，达到时间复杂度在O(n) */
const twoSum1 = (nums, target) => {
  let map = new Map(),
      res = [],
      deff = 0
  for(let i = 0, len = nums.length; i < len; i++){
    deff = target - nums[i]
    let deffVal = map.get(deff)
    if(map.has(deff) && deffVal !== i){
      res.push(deffVal)
      res.push(i)
      return res
    }else{
      map.set(nums[i] ,i)
    }
  }
}

twoSum1([2,7,7] , 9)