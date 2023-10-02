---
title: 数组
order: 1
---

## 1. 【704】二分查找

### 1. 题目描述

来源：https://leetcode.cn/problems/binary-search/

给定一个 `n` 个元素有序的（升序）整型数组 `nums` 和一个目标值 `target` ，写一个函数搜索 `nums` 中的 `target`，如果目标值存在返回下标，否则返回 `-1`
**示例 1:**

```
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```

**示例 2:**

```
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
```

**提示：**

1. 你可以假设 `nums` 中的所有元素是不重复的。
2. `n` 将在 `[1, 10000]`之间。
3. `nums` 的每个元素都将在 `[-9999, 9999]`之间。

### 2. 解题思路

二分查找适用于有序数组的目标值查找，其首先思路很简单：

1. 首先初始化两个指针：left和right，分别指向数组的第一个元素和最后一个元素
2. 获取两个指针之间的中间点的值，并将其和目标值进行比较
   + 如果目标值和中间值相等，就直接返回中间值的索引
   + 如果目标值大于中间值，就说明目标值在后半部分，将left设置为mid+1，继续进行二分查找
   + 如果目标值小于中间值，就说明目标值在前半部分，将right设置为mid-1，继续进行二分查找

### 3. 题解

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};
```

## 2. 【27】移除元素

### 1. 题目描述

来源：https://leetcode.cn/problems/remove-element/

给你一个数组 `nums` 和一个值 `val`，你需要原地移除所有数值等于 `val` 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 `O(1)` 额外空间并原地修改输入数组

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素

**说明:**

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以**「引用」**方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

```
// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

**示例 1：**

```
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
```

**示例 2：**

```
输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
```

**提示：**

- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`

### 2. 解题思路

使用双指针，定义一个快指针，一个慢指针，快指针遍历时，当遍历的值不是要删除的值时，就存入到慢指针数组中

### 3. 题解

```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] != val) {
            nums[slow] = nums[fast];
            slow++;
        }
    }
    return slow;
};
```

## 3. 【977】有序数组的平方

### 1. 题目描述

来源：https://leetcode.cn/problems/squares-of-a-sorted-array/

给你一个按 **非递减顺序** 排序的整数数组 `nums`，返回 **每个数字的平方** 组成的新数组，要求也按 **非递减顺序** 排序

**示例 1：**

```
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
```

**示例 2：**

```
输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

**提示：**

- `1 <= nums.length <= 104`
- `-104 <= nums[i] <= 104`
- `nums` 已按 **非递减顺序** 排序

进阶：

- 请你设计时间复杂度为 `O(n)` 的算法解决本问题

### 2. 解题思路

数组其实是有序的， 只不过负数平方之后可能成为最大数了

那么数组平方的最大值就在数组的两端，不是最左边就是最右边，不可能是中间

此时可以考虑双指针法了，i指向起始位置，j指向终止位置

定义一个新数组result，和A数组一样的大小，让k指向result数组终止位置

如果`A[i] * A[i] < A[j] * A[j]` 那么`result[k--] = A[j] * A[j];` 

如果`A[i] * A[i] >= A[j] * A[j]` 那么`result[k--] = A[i] * A[i];` 

### 3. 题解

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let res = [];
    let i = 0;
    let j = nums.length - 1;
    let k = nums.length - 1;
    while (i <= j) {
        let left = nums[i] * nums[i];
        let right = nums[j] * nums[j];
        if (left < right) {
            res[k] = right;
            k--;
            j--;
        } else {
            res[k] = left;
            k--;
            i++;
        }
    }
    return res;
};
```

## 4. 【209】长度最小的子数组

### 1. 题目描述

来源：https://leetcode.cn/problems/minimum-size-subarray-sum/

给定一个含有 `n` 个正整数的数组和一个正整数 `target` **。**

找出该数组中满足其总和大于等于 `target` 的长度最小的 **连续子数组** `[numsl, numsl+1, ..., numsr-1, numsr]` ，并返回其长度**。**如果不存在符合条件的子数组，返回 `0` 

**示例 1：**

```
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```

**示例 2：**

```
输入：target = 4, nums = [1,4,4]
输出：1
```

**示例 3：**

```
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
```

**提示：**

- `1 <= target <= 109`
- `1 <= nums.length <= 105`
- `1 <= nums[i] <= 105`

进阶：

- 如果你已经实现 `O(n)` 时间复杂度的解法, 请尝试设计一个 `O(n log(n))` 时间复杂度的解法。

### 2. 解题思路

本题可以使用滑动窗口算法

详见[滑动窗口算法模板]()

### 3. 题解

```js
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let right = 0;
    let curSum = 0;
    let minLength = 0;
    while (right < nums.length) {
        curSum = curSum + nums[right];
        while (curSum >= target) {
            if (right - left + 1 < minLength || minLength == 0) {
                minLength = right - left + 1;
            }
            curSum = curSum - nums[left];
            left++;
        }
        right++;
    }
    return minLength;
};
```