/**
 * # 重复的子字符串

[力扣题目链接](https://leetcode-cn.com/problems/repeated-substring-pattern/)

## 题目描述

给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。

## 示例
```
输入: s = "abab"
输出: true
解释: 可由子串 "ab" 重复两次构成。

输入: s = "aba"
输出: false

输入: s = "abcabcabcabc"
输出: true
解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
```

 */


/**
 * 解法 1
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  return (s+s).slice(1, -1).indexOf(s) !== -1
};