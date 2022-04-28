/**
 * # 翻转链表

[力扣题目链接](https://leetcode-cn.com/problems/reverse-linked-list/)

## 描述

题意：反转一个单链表。

示例: 输入: 1->2->3->4->5->NULL 输出: 5->4->3->2->1->NULL

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(!head || !head.next) return head

  let temp = null, pre = null, cur = head
  while(cur) {
    // 取出当前链表后半截
    temp = cur.next
    // 让当前链表头节点指向已取出的前半截链表
    cur.next = pre
    // 更新取出的前半截链表
    pre = cur
    // 当前链表执行后半截
    cur = temp
  }

  // console.log(pre)
  return pre
};


reverseList({
  val: 1, next: { val: 2, next: { val: 3, next: null } }
})