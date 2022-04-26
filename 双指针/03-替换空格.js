/**
 * # 替换空格

[力扣题目链接](https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/)

## 描述
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

输入：s = "We are happy."
输出："We%20are%20happy."
 */

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  let  len = s.length, newlen = len

  for(let i = 0; i < len; i++) {
    if(s[i] === ' ') {
      newlen += 2
    }
  }

  const resArr = []


  let fast = newlen - 1, slow = len - 1
  while(fast > slow) {
    if(s[slow] !== ' ') {
      resArr.unshift(s[slow])
      slow -- 
      fast --
    } else {
      resArr.unshift(...['%', '2', '0'])
      fast -= 3
      slow --
    }
  }

  while(slow >= 0) {
    resArr.unshift(s[slow])
    slow --
  }

  return resArr.join('')
};


replaceSpace('We are happy.')