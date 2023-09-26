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

来源：https://leetcode.cn/problems/reverse-linked-list-ii/

给你单链表的头指针 `head` 和两个整数 `left` 和 `right` ，其中 `left <= right` 。请你反转从位置 `left` 到位置 `right` 的链表节点，返回 **反转后的链表** 

**示例 1：**

```
输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
```

**示例 2：**

```
输入：head = [5], left = 1, right = 1
输出：[5]
```

**提示：**

- 链表中节点数目为 `n`
- `1 <= n <= 500`
- `-500 <= Node.val <= 500`
- `1 <= left <= right <= n`

**进阶：** 你可以使用一趟扫描完成反转吗？

### 2. 解题思路

将第left到right的节点进行反转，然后将left-1节点指向right，让right+1节点指向left，这样就实现了链表的局部反转

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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let dummyHead = new ListNode(); // 定义虚拟头节点
    dummyHead.next = head;
    // 寻找第left-1节点
    let p = dummyHead;
    for (let i = 0; i < left - 1; i++) {
        p = p.next;
    }
    // 定义当前节点和前驱节点，当前节点指向left节点
    let pre = null;
    let cur = p.next;
    // 将left到right节点进行反转
    for (let i = 0; i <= right - left; i++) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    // 将反转的局部链表和原链表进行拼接
    p.next.next = cur;
    p.next = pre;

    return dummyHead.next;
};
```

## 5. 【142】环形链表 II

### 1. 题目描述

来源：https://leetcode.cn/problems/linked-list-cycle-ii/

给定一个链表的头节点  `head` ，返回链表开始入环的第一个节点。 *如果链表无环，则返回 `null`。*

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（**索引从 0 开始**）。如果 `pos` 是 `-1`，则在该链表中没有环。**注意：`pos` 不作为参数进行传递**，仅仅是为了标识链表的实际情况。

**不允许修改** 链表。

**示例 1：**

```
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

**示例 2：**

```
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
```

**示例 3：**

```
输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
```

**提示：**

- 链表中节点的数目范围在范围 `[0, 104]` 内
- `-105 <= Node.val <= 105`
- `pos` 的值为 `-1` 或者链表中的一个有效索引

### 2. 解题思路

使用快慢指针，快慢指针用于判断链表是否成环，然后推导公式求得入口

### 3. 题解

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // 定义快慢指针
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        slow = slow.next; //慢指针走一步
        fast = fast.next.next; //快指针走两步
        if (slow == fast) {
            // 初次相遇
            slow = head; //慢指针回到头节点
            while (slow !== fast) {
                slow = slow.next; //快慢指针一起走
                fast = fast.next; //快慢指针一起走
            }
            return slow;
        }
    }
    return null;
};
```

## 6. 【203】移除链表元素

### 1. 题目描述

来源：https://leetcode.cn/problems/remove-linked-list-elements/

给你一个链表的头节点 `head` 和一个整数 `val` ，请你删除链表中所有满足 `Node.val == val` 的节点，并返回 **新的头节点** 。

**示例 1：**

```
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
```

**示例 2：**

```
输入：head = [], val = 1
输出：[]
```

**示例 3：**

```
输入：head = [7,7,7,7], val = 7
输出：[]
```

**提示：**

- 列表中的节点数目在范围 `[0, 104]` 内
- `1 <= Node.val <= 50`
- `0 <= val <= 50`

### 2. 解题思路

使用虚拟头节点来方便我们操作，定义一个指针来遍历，遍历到符合条件的元素就删除

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let dummyHead = new ListNode(); //定义一个虚拟头节点
    dummyHead.next = head;
    let cur = dummyHead; //定义一个指针来指向虚拟头节点
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return dummyHead.next;
};
```

## 7. 【206】反转链表

### 1. 题目描述

来源：https://leetcode.cn/problems/reverse-linked-list/

给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表

**示例 1：**

```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

**示例 2：**

```
输入：head = [1,2]
输出：[2,1]
```

**示例 3：**

```
输入：head = []
输出：[]
```

**提示：**

- 链表中节点的数目范围是 `[0, 5000]`
- `-5000 <= Node.val <= 5000`

**进阶：**链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

### 2. 解题思路

反转两个节点：将n + 1的next指向n；反转多个节点：双指针遍历链表，重复上述操作

 使用双指针一前一后遍历链表,然后反转双指针

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
var reverseList = function (head) {
    let p1 = head;
    let p2 = null;
    while (p1) {
        const temp = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = temp;
    }
    return p2;
};
```

## 8. 【707】设计链表

### 1. 题目描述

来源：https://leetcode.cn/problems/design-linked-list/

你可以选择使用单链表或者双链表，设计并实现自己的链表。

单链表中的节点应该具备两个属性：`val` 和 `next` 。`val` 是当前节点的值，`next` 是指向下一个节点的指针/引用。

如果是双向链表，则还需要属性 `prev` 以指示链表中的上一个节点。假设链表中的所有节点下标从 **0** 开始。

实现 `MyLinkedList` 类：

- `MyLinkedList()` 初始化 `MyLinkedList` 对象。
- `int get(int index)` 获取链表中下标为 `index` 的节点的值。如果下标无效，则返回 `-1` 。
- `void addAtHead(int val)` 将一个值为 `val` 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
- `void addAtTail(int val)` 将一个值为 `val` 的节点追加到链表中作为链表的最后一个元素。
- `void addAtIndex(int index, int val)` 将一个值为 `val` 的节点插入到链表中下标为 `index` 的节点之前。如果 `index` 等于链表的长度，那么该节点会被追加到链表的末尾。如果 `index` 比长度更大，该节点将 **不会插入** 到链表中。
- `void deleteAtIndex(int index)` 如果下标有效，则删除链表中下标为 `index` 的节点。

**示例：**

```
输入
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
输出
[null, null, null, null, 2, null, 3]

解释
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
myLinkedList.get(1);              // 返回 2
myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
myLinkedList.get(1);              // 返回 3
```

**提示：**

- `0 <= index, val <= 1000`
- 请不要使用内置的 LinkedList 库。
- 调用 `get`、`addAtHead`、`addAtTail`、`addAtIndex` 和 `deleteAtIndex` 的次数不超过 `2000` 。

### 2. 解题思路

使用虚拟头节点解决

### 3. 题解

```js
// 先定义节点
let ListNode = function (val) {
    this.val = val;
    this.next = null;
};

var MyLinkedList = function () {
    this.size = 0;
    this.dummyHead = new ListNode(); //创建一个虚拟头节点
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) {
        return -1;
    }
    let cur = this.dummyHead;
    while (index > 0) {
        cur = cur.next;
        index--;
    }
    return cur.next.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    // 生成一个节点，存放的值是val
    const node = new ListNode(val);
    // 将node.next指向第一个节点
    node.next = this.dummyHead.next;
    // dummyHead.next指向新节点，使之变成第一个节点
    this.dummyHead.next = node;
    // 链表长度+1
    this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    // 生成一个节点，存放的值是val
    const node = new ListNode(val);
    let cur = this.dummyHead;
    while (cur.next !== null) {
        cur = cur.next;
    }
    cur.next = node;
    this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size) {
        return;
    }
    const node = new ListNode(val);
    let cur = this.dummyHead;
    while (index > 0) {
        cur = cur.next;
        index--;
    }
    node.next = cur.next;
    cur.next = node;
    this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) {
        return;
    }
    let cur = this.dummyHead;
    while (index > 0) {
        cur = cur.next;
        index--;
    }
    cur.next = cur.next.next;
    this.size--;
};
```