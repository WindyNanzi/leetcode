/**
 * [力扣题目链接](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

## 描述

给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

进阶：你能尝试使用一趟扫描实现吗？
 */

import { generateNodeFormArray } from "../util.js";


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let slow = { next: head }, fast = head.next, step = 1, len = 1

  while(fast && step < n) {
    fast = fast.next
    step += 1
    len += 1
  }

  while(fast) {
    slow = slow.next
    fast = fast.next
    len += 1
  }


  if(len === step) {
    return head.next
  } else {
    slow.next = slow.next.next
    return head
  }
}

console.log(removeNthFromEnd(generateNodeFormArray([1]), 1))
console.log(removeNthFromEnd(generateNodeFormArray([1,2]), 1))
console.log(removeNthFromEnd(generateNodeFormArray([1,2,3]), 2))