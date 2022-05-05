/**
 * [力扣题目链接](https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/)

## 描述

给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。

题目数据 保证 整个链式结构中不存在环。

注意，函数返回结果后，链表必须 保持其原始结构 。

进阶：你能否设计一个时间复杂度 O(n) 、仅用 O(1) 内存的解决方案？

## 测试用例

```javascript

getIntersectionNode([4,1,8,4,5], [5,0,1,8,4,5]) // 8

getIntersectionNode([2,6,4], [1,5]) // null

```
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 本题采用了 https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/solution/mian-shi-ti-0207-lian-biao-xiang-jiao-sh-b8hn/ 的题解
 */
var getIntersectionNode = function(headA, headB) {
  let A = headA, B = headB

  while(A !== B) {
    A = A === null ? headB : A.next
    B = B === null ? headA : B.next
  }

  return A
}