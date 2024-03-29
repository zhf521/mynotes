---
title: 链表
order: 2
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

进阶：你能尝试使用一趟扫描实现吗？

### 2. 解题思路

双指针，使用快慢指针，先让一个快指针走 n 步，然后另一个慢指针一起走，当快指针走到尾的时候，此时慢指针就指向了我们要删除的节点的前一个节点，然后删除要删除的节点即可

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

使用双指针遍历，一个pre指针指向虚拟头节点，一个cur指针指向头节点，当pre指针指向左边界的前一个节点开始依次执行交换操作即可

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
    let pre = dummyHead;
    let cur = head;
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
        cur = cur.next;
    }
    for (let i = 0; i < right - left; i++) {
        let temp = cur.next;
        cur.next = temp.next;
        temp.next = pre.next;
        pre.next = temp;
    }
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

详见：[代码随想录](https://programmercarl.com/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.html#_142-%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8ii)

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

进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

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
    let cur = head;
    let pre = null;
    while (cur) {
        const temp = cur.next; // 用temp指针保存一下cur的下一个节点，因为接下来要改变cur.next
        cur.next = pre; // 反转操作
        // 更新pre和cur
        pre = cur;
        cur = temp;
    }
    return pre;
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

## 9. 【160】相交链表

### 1. 题目描述

来源：https://leetcode.cn/problems/intersection-of-two-linked-lists/

给你两个单链表的头节点 `headA` 和 `headB` ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 `null` 。

图示两个链表在节点 `c1` 开始相交：

题目数据 **保证** 整个链式结构中不存在环。

**注意**，函数返回结果后，链表必须 **保持其原始结构** 。

**自定义评测：**

**评测系统** 的输入如下（你设计的程序 **不适用** 此输入）：

- `intersectVal` - 相交的起始节点的值。如果不存在相交节点，这一值为 `0`
- `listA` - 第一个链表
- `listB` - 第二个链表
- `skipA` - 在 `listA` 中（从头节点开始）跳到交叉节点的节点数
- `skipB` - 在 `listB` 中（从头节点开始）跳到交叉节点的节点数

评测系统将根据这些输入创建链式数据结构，并将两个头节点 `headA` 和 `headB` 传递给你的程序。如果程序能够正确返回相交节点，那么你的解决方案将被 **视作正确答案** 。

**示例 1：**

```
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
— 请注意相交节点的值不为 1，因为在链表 A 和链表 B 之中值为 1 的节点 (A 中第二个节点和 B 中第三个节点) 是不同的节点。换句话说，它们在内存中指向两个不同的位置，而链表 A 和链表 B 中值为 8 的节点 (A 中第三个节点，B 中第四个节点) 在内存中指向相同的位置。
```

**示例 2：**

```
输入：intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Intersected at '2'
解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [1,9,1,2,4]，链表 B 为 [3,2,4]。
在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
```

**示例 3：**

```
输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
这两个链表不相交，因此返回 null 。
```

**提示：**

- `listA` 中节点数目为 `m`
- `listB` 中节点数目为 `n`
- `1 <= m, n <= 3 * 104`
- `1 <= Node.val <= 105`
- `0 <= skipA <= m`
- `0 <= skipB <= n`
- 如果 `listA` 和 `listB` 没有交点，`intersectVal` 为 `0`
- 如果 `listA` 和 `listB` 有交点，`intersectVal == listA[skipA] == listB[skipB]`

进阶：你能否设计一个时间复杂度 `O(m + n)` 、仅用 `O(1)` 内存的解决方案？

### 2. 解题思路

定义两个指针分别指向A、B，两个指针同时遍历，遍历到尾部就去遍历另一个，直到两个指针相遇

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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let p1 = headA;
    let p2 = headB;
    while (p1 !== p2) {
        if (p1 === null) {
            p1 = headB;
        } else {
            p1 = p1.next;
        }
        if (p2 === null) {
            p2 = headA;
        } else {
            p2 = p2.next;
        }
    }
    return p1;
};
```