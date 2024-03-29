/**
 * [力扣题目链接](https://leetcode-cn.com/problems/reverse-linked-list/)

## 描述

题意：反转一个单链表。

示例: 输入: 1->2->3->4->5->NULL 输出: 5->4->3->2->1->NULL
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let res = null
  while(head) {
    res = { val: head.val, next: res }
    head = head.next
  }

  return res
};