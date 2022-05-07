/**
 * 题意： 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

  为了表示给定链表中的环，使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

  说明：不允许修改给定的链表。

  有环的链表：
  ![](https://cdn.nlark.com/yuque/0/2022/png/283876/1647587183103-assets/web-upload/9f89582b-e09c-491b-9d41-739ee33a9677.png)
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if(head === null) {
    return null
  }

  // a +（n+1）b + nc

  // a + (n+1) b + nc = 2(a+b)
  // a + b + n(b+c) = 2(a+b)
  // n(b+c) = a + b
  // a = c + (n-1)(b + c)
  while(fast) {
  let slow = head, fast = head
  

    slow = slow.next
    fast = fast.next?.next

    if(fast === slow) {
      let ptr = head
      while(prt !== next) {
        ptr = ptr.next
        slow = slow.next
      }
      return ptr
    }
  }

  return null
}