---
title: 链表
order: 1
---

## 1. 【2】两数相加

### 1. 题目描述

来源：https://leetcode.cn/problems/add-two-numbers/

给你两个 **非空** 的链表，表示两个非负的整数。它们每位数字都是按照 **逆序** 的方式存储的，并且每个节点只能存储 **一位** 数字

请你将两个数相加，并以相同形式返回一个表示和的链表

你可以假设除了数字 0 之外，这两个数都不会以 0 开头

**示例 1：**

```
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```

**示例 2：**

```
输入：l1 = [0], l2 = [0]
输出：[0]
```

**示例 3：**

```
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
```

**提示：**

- 每个链表中的节点数在范围 `[1, 100]` 内
- `0 <= Node.val <= 9`
- 题目数据保证列表表示的数字不含前导零

### 2. 解题思路

遍历被相加的两个链表，模拟相加操作，将每个节点依次相加。注意进位问题

### 3. 题解

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let resList = new ListNode(0, null);
    let p1 = l1; //定义指针，来遍历链表l1
    let p2 = l2; //定义指针，来遍历链表l2
    let p3 = resList; //定义指针，指向结果链表
    let carry = 0; //记录每次相加之后的进位的值
    while (p1 || p2) {
        let val1 = p1 ? p1.val : 0;
        let val2 = p2 ? p2.val : 0;
        let sum = val1 + val2 + carry;
        if (sum >= 10) {
            sum = sum - 10;
            carry = 1;
        } else {
            carry = 0;
        }
        p3.next = new ListNode(sum, null); //将结果放到链表中
        p3 = p3.next;
        p1 = p1 ? p1.next : p1;
        p2 = p2 ? p2.next : p2;
    }
    // 如果最后还有进位，直接放在结果链表
    if (carry == 1) {
        p3.next = new ListNode(1, null);
    }
    return resList.next;
};
```

## 2. 【19】删除链表的倒数第N个结点

### 1. 题目描述

来源：https://leetcode.cn/problems/remove-nth-node-from-end-of-list/

给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点

**示例 1：**

```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

**示例 2：**

```
输入：head = [1], n = 1
输出：[]
```

**示例 3：**

```
输入：head = [1,2], n = 1
输出：[1]
```

**提示：**

- 链表中结点的数目为 `sz`
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

**进阶：**你能尝试使用一趟扫描实现吗？

### 2. 解题思路

双指针，使用快慢指针，先让一个快指针走 n 步，然后另一个慢指针一起走，当第快指针走到尾的时候，此时慢指针就指向了我们要删除的节点，进行删除即可

### 3. 题解

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    //设置虚拟头节点
    const dummy = new ListNode();
    dummy.next = head;
    // 设置快慢指针
    let fast = dummy;
    let slow = dummy;
    // 快指针先走n步
    while (n !== 0) {
        fast = fast.next;
        n--;
    }
    // 快慢指针一起走，直到快指针走到最后一个节点
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    // 删除慢指针指向的节点（即要删除的节点）
    slow.next = slow.next.next;
    return dummy.next;
};
```

## 3. 【24】两两交换链表中的节点

### 1. 题目描述

来源：https://leetcode.cn/problems/swap-nodes-in-pairs/

给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）

**示例 1：**

```
输入：head = [1,2,3,4]
输出：[2,1,4,3]
```

**示例 2：**

```
输入：head = []
输出：[]
```

**示例 3：**

```
输入：head = [1]
输出：[1]
```

**提示：**

- 链表中节点的数目在范围 `[0, 100]` 内
- `0 <= Node.val <= 100`

### 2. 解题思路

使用虚拟头节点，开始时，我们创建一个虚拟头节点，让cur指向虚拟头节点，然后进行交换操作即可

### 3. 题解

```js
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
var swapPairs = function (head) {
    let dummyHead = new ListNode(); //虚拟头节点
    dummyHead.next = head; //虚拟头节点指向head
    let cur = dummyHead;
    while (cur.next && cur.next.next) {
        let temp1 = cur.next; //记录临时节点
        let temp2 = cur.next.next.next; //记录临时节点
        // 交换操作
        cur.next = cur.next.next;
        cur.next.next = temp1;
        cur.next.next.next = temp2;
        cur = cur.next.next; //cur移动两位，准备下一轮交换
    }
    return dummyHead.next;
};
```

## 4. 【92】反转链表 II

### 1. 题目描述

来源：

### 2. 解题思路

### 3. 题解

```js

```

## 5. 【】

### 1. 题目描述

来源：

### 2. 解题思路

### 3. 题解

```js
```

## 6. 【】

### 1. 题目描述

来源：

### 2. 解题思路

### 3. 题解

```js

```

