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
  const temp = { next: head }
  let diff = 1
  let fast = temp.next
  let slow = temp
  while(fast && fast.next) {
    if(diff !== n) {
      diff ++
    } else {
      slow = slow.next
    }
    fast = fast.next
  }
  slow.next = slow.next.next
  return temp.next
};

const linklist = generateNodeFormArray([1,2,3,4,5])

removeNthFromEnd(linklist, 2)