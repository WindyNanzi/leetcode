/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const strArr = s.split(''),
    rule = {
      '{': 1,
      '}': -1,
      '(': 2,
      ')': -2,
      '[': 3,
      ']': -3
    }
  let stack = []

  for (let i = 0, len = strArr.length;i < len;i++) {
    let char = strArr[i],
      charValue = rule[char]
    if (charValue > 0) {
      stack.push(char)
    } else if (stack.length === 0 && charValue < 0) {
      return false
    } else if (stack.length !== 0 && charValue < 0) {
      let validValue = rule[stack[stack.length - 1]]
      if (validValue + charValue === 0) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  if (stack.length === 0) {
    return true
  } else {
    return false
  }

};

console.log(isValid(')[]{}'))
console.log(isValid('(]'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))


/**
 * 更为巧妙的解法:
 * 考虑到了for...of...可以遍历字符串的特性
 * 而且map设计更为巧妙
 */
var isValid1 = function (s) {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  let result = []  // 设置一个空栈， 先进后出
  for (let i of s) {
    if (i in map) { // 如果 为 属性 即 左括号， 应该保存
      result.push(i)
    } else {  // 如果不是属性， 即右括号， 应该和栈的顶部比较
      if (i !== map[result.pop()]) return false
    }
  }
  if (result.length === 0) {
    return true
  } else {
    return false
  }
};