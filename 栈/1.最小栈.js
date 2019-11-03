/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = Object.create({})
    this.helper = Object.create({})
    this.topIndex = 0
    this.helperTop = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack[this.topIndex] = x  
    if(
        this.helperTop === 0 || 
        this.helper[this.helperTop - 1] >= x 
    ){
        this.helper[this.helperTop] = x
        this.helperTop ++ 
    }
    this.topIndex++
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.topIndex !== 0){
        if(this.stack[this.topIndex - 1] === this.helper[this.helperTop - 1]){
            delete this.helper[this.helperTop - 1]
            this.helperTop--
        }  
        delete this.stack[this.topIndex - 1]
        this.topIndex --
    } else {
        console.error('stack has no data!')
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.topIndex !== 0){
        return this.stack[this.topIndex - 1]
    } else {
        console.error('stack has no data!')
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.topIndex !== 0){
        return this.helper[this.helperTop - 1]
    } else {
        console.log('stack has no data!')
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(0)
obj.push(1)
obj.push(0)
obj.pop()
console.log(obj.getMin())
console.log(obj.top())