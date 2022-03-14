/**
 * [力扣题目链接](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

## 描述

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例: 输入: 1->2->3->4->5->NULL 输出: 2->1->4->3->5->NULL
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const vHead = { next: head }

  let temp = vHead
  while(temp.next && temp.next.next) {
    const node = temp.next.next
    temp.next.next = temp.next.next.next
    node.next = temp.next
    temp.next = node

    temp = temp.next.next.next
  }

  return vHead.next
};