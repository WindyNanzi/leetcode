
/** JS 单链表结构：
* function ListNode(val){
*    this.val = val
*    this.next = null
* }
*/
function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 示例：
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */


let addTwoNumbers = (l1, l2) => {
  let result = new ListNode(0)
      len = 1
      isOverflow = false
      node = result
  if(l1 === null && l2 === null){
    return null
  }else{
    if(l1 === null) l1 = new ListNode(0)
    if(l2 === null) l2 = new ListNode(0)
  }
  for (let i = 0;i < len;i++) {
    node.val = node.val + l1.val + l2.val
    
    if (node.val >= 10) {
      node.val = node.val % 10
      isOverflow = true
      node.next = new ListNode(1)
      len++
    }

    if (l1.next !== null && l2.next !== null) {
      if(node.next === null){
        node.next = new ListNode(0)
        len++
      } 
      l1 = l1.next
      l2 = l2.next
      len++
    } else if (l1.next !== null && l2.next === null) {
      if(node.next === null){
        node.next = new ListNode(0)
        len++
      } 
      l1 = l1.next
      l2 = new ListNode(0)
      len++
    } else if (l1.next === null && l2.next !== null) {
      if(node.next === null){
        node.next = new ListNode(0)
        len++
      } 
      l1 = new ListNode(0)
      l2 = l2.next
      
    } else {
      l1 = new ListNode(0)
      l2 = new ListNode(0)
      if(isOverflow){
        len++
        isOverflow = false
      }
    }

    node = node.next
    if(node === null){
      break
    }
  }
  console.log(result)
  return result

}



addTwoNumbers({
  val: 2,
  next: {
    val: 4,
    next: {
      val: 5,
      next: {
        val: 9,
        next: null
      }
    }
  }
}, {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
})

/*最快的解法：递归*/
var addTwoNumbers1 = function (l1, l2, add = 0) {
  let l3=new ListNode(0);
  let nextadd=0;
  if(l1===null||l2===null){
      if(l1===null&&l2===null){
          if(add===1){
              l3.val=add;
              return l3;
          }else{
              return null;
          }
      }else{
          let sum;
          if(l1===null){
              sum=l2.val+add;
          }else{
              sum=l1.val+add;
          }
          if(sum>=10){
              sum-=10;
              nextadd=1;
          }
          l3.val=sum;
          if(l1===null){
              l3.next=addTwoNumbers(null,l2.next,nextadd);
          }else{
              l3.next=addTwoNumbers(l1.next,null,nextadd);
          }
      }
  }else{
      let sum=l1.val+l2.val+add;
      if(sum>=10){
          sum-=10;
          nextadd=1;
      }
      l3.val=sum;
      l3.next=addTwoNumbers(l1.next,l2.next,nextadd); //没有完成，继续往下加
  }

  return l3;
};

/**最清晰，也是非常不错的解法 */
var addTwoNumbers2 = function(l1, l2) {
  //判断两个链表是否为空
  if(!l1) return l2;
  if(!l2) return l1;
  //把l2的链表的val加等赋值给l1
  l1.val += l2.val;
  // 进位处理 判断加等之后是否进一
  if(l1.val>9){
      //这里只留个位数
      l1.val -=10;
      //然后把进一的值保存起来
      // l1.next和l2.next都不等于null 
      // 进位数据保存到l1.next或l2.next都行
      // l1.next为null 保存到l1.next
      // l2.next为null 保存到l2.next
      if(l1.next !==null && l2.next!==null)
          l1.next.val++;
      else if(l1.next === null)
          l1.next = new ListNode(1)
      else if(l2.next === null)
          l2.next = new ListNode(1)
  }
  
  l1.next = addTwoNumbers(l1.next,l2.next)
  return l1;
};