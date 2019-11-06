/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = []
  const doCalc = (src,token,dis)=>{
    let result = 0
    debugger
    switch(token){
      case '+':
        result = src + dis
        break
      case '-':
        result = src - dis
        break
      case '*':
        result = src * dis
        break
      case '/':
        result = src / dis
        break
    }
    return parseInt(result)
  }
  for(let i=0,len=tokens.length; i<len; i++){
    if(!isNaN(parseInt(tokens[i]))){
      stack.push(parseInt(tokens[i]))
    } else {
      let dis = stack.pop(),
          src = stack.pop()
      let result = doCalc(src,tokens[i],dis)
      stack.push(result)
      // stack.push(parseInt(doCalc(stack.pop(),tokens[i],stack.pop())))
    }
  }
  return stack.pop()
};
console.log(evalRPN(["4", "13", "5", "/", "+"]))


var evalRPN1 = function(tokens) {
  const stack = []
  const doCalc = (dis,token,src)=>{
    let result = 0
    debugger
    switch(token){
      case '+':
        result = src + dis
        break
      case '-':
        result = src - dis
        break
      case '*':
        result = src * dis
        break
      case '/':
        result = src / dis
        break
    }
    return parseInt(result)
  }
  for(let i=0,len=tokens.length; i<len; i++){
    !isNaN(parseInt(tokens[i]))
      ? stack.push(parseInt(tokens[i]))
      : stack.push(parseInt(doCalc(stack.pop(),tokens[i],stack.pop())))
  }
  return stack.pop()
};
console.log(evalRPN1(["4", "13", "5", "/", "+"]))