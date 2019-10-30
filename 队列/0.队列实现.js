var MyCircularQueue = function(k) {
  this.size = k
  this.queue = Object.create(null)
  this.head = -1
  this.rear = -1
};

/**
* Insert an element into the circular queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if(this.isFull()){
    return false
  } 
  if(this.isEmpty()){
    this.head = 0
  }
  
  this.rear = (this.rear + 1) % this.size
  this.queue[this.rear] = value
  return true
};

/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if(this.isEmpty()){
    return false
  }
  delete this.queue[this.head]
  if(this.head === this.rear){
    this.head = -1
    this.rear = -1 
    return true
  }
  this.head = (this.head + 1 ) % this.size
  return true 
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if(!this.isEmpty()){
    return this.queue[this.head]
  } else {
    return -1
  }
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  if(!this.isEmpty()){
    return this.queue[this.rear]
  } else {
    return -1
  }
  
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.head === -1
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return (this.rear - this.head  + 1) % this.size === 0
};
