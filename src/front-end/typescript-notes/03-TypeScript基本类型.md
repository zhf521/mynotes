---
title: 基本类型
order: 3
---

## 1. 类型声明

- 类型声明是TS非常重要的一个特点
- 通过类型声明可以指定TS中变量（参数、形参）的类型
- 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错
- 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值

## 2. 语法

```typescript
let 变量: 类型

let 变量: 类型 = 值

function fn(参数: 类型, 参数: 类型): 类型{
    ...
}
```

## 3. 自动类型判断

- TS拥有自动的类型判断机制
- 当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型
- 所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明

## 4. 类型

|  类型   |       例子        |              描述              |
| :-----: | :---------------: | :----------------------------: |
| number  |    1, -33, 2.5    |            任意数字            |
| string  | 'hi', "hi", \`hi` |           任意字符串           |
| boolean |    true、false    |       布尔值true或false        |
| 字面量  |      其本身       |  限制变量的值就是该字面量的值  |
|   any   |         *         |            任意类型            |
| unknown |         *         |         类型安全的any          |
|  void   | 空值（undefined） |     没有值（或undefined）      |
|  never  |      没有值       |          不能是任何值          |
| object  |  {name:'孙悟空'}  |          任意的JS对象          |
|  array  |      [1,2,3]      |           任意JS数组           |
|  tuple  |       [4,5]       | 元素，TS新增类型，固定长度数组 |
|  enum   |    enum{A, B}     |       枚举，TS中新增类型       |

演示：

- number

  ```typescript
  let decimal: number = 6
  let hex: number = 0xf00d
  let binary: number = 0b1010
  let octal: number = 0o744
  let big: bigint = 100n
  ```

  ```typescript
  // 声明一个变量a，同时指定它的类型为number
  let a: number
  // a的类型设置为了number,在以后的使用过程中a的值只能是数字
  a = 10
  // a = 'hello' //代码会报错，因为变量a的类型是number，不能赋值字符串
  ```

- boolean

  ```typescript
  let isDone: boolean = false
  ```

- string

  ```typescript
  let b: string
  b = 'hello'
  // b = 123 //报错
  
  //声明完变量直接进行赋值
  // let c:boolean = true
  // 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
  ```

- 字面量

  - 也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围

    ```typescript
    let color: 'red' | 'blue' | 'black'
    let num: 1 | 2 | 3 | 4 | 5
    // 可以使用 | 来连接多个类型(联合类型)
    let c: 'male' | 'female'
    c = 'male'
    c = 'female'
    ```

- any

  ```typescript
  // any表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
  // 使用TS时，不建议使用any类型
  // let e: any
  //声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
  let e
  e = 10
  e = 'hello'
  ```

- unknown

  ```typescript
  //unknown 表示未知类型的值
  let f: unknown
  f = 10
  f = 'hello'
  f = true
  //unknown 实际上就是一个类型安全的any
  //unknown 类型的变量，不能直接赋值给其它变量
  ```

- void

  ```typescript
  let unusable: void = undefined
  // void用来表示空，以函数为例，就表示没有返回值的函数
  function fn(): void{
    // return true
  }
  ```

- never

  ```typescript
  // never表示永远不会返回结果
  function fn2(): never{
    throw new Error('报错了')
  }
  ```

- object

  ```typescript
  // object表示一个js对象
  let a: object
  
  /*
  {}用来指定对象中可以包含哪些属性
  语法：{属性:属性值,属性名:属性值}
  在属性名后边加上?，表示属性是可选的
  */
  let b: { name: string, age?: number }
  b = { name: '孙悟空' }
  
  // [propName:string]:any 表示任意类型的属性
  let c: { name: string,[propName:string]:any }
  c={name:'猪八戒',age:18,gender:'男'}
  
  /*
  设置函数结构的类型声明
  语法：(形参:类型,形参:类型)=>返回值
  */
  let d: (a:number,b:number)=>number
  
  // &表示同时
  let j: { name: string } & { age: number }
  j = { name: '孙悟空', age: 18 }
  ```

- array

  ```typescript
  /*
  数组的类型声明
  类型[]
  Array<类型>
  */
  // string[] 表示字符串数组
  let e:string[]
  e = ['a', 'b', 'c']
  
  // number[] 表示数值数组
  let f: number[]
  f = [1, 2, 3, 4]
  
  let g: Array<number>
  g = [1, 2, 3]
  ```

- tuple

  ```typescript
  /*
  元组，元组就是固定长度的数组
  语法：[类型,类型,类型]
  */
  let h: [string, string]
  h = ['hello', 'abc']
  ```

- enum

  ```typescript
  /*
  enum枚举
  */
  enum Color {
    Red,
    Green,
    Blue,
  }
  let c: Color = Color.Green
  
  enum Color {
    Red = 1,
    Green,
    Blue,
  }
  let c: Color = Color.Green
  
  enum Color {
    Red = 1,
    Green = 2,
    Blue = 4,
  }
  let c: Color = Color.Green
  ```
## 5. 类型断言

有些情况下，变量的类型对于我们来说是很明确，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式：

- 第一种

  ```typescript
  // 变量 as 类型
  let s: string
  let f: unknown
  s = f as string
  ```

- 第二种

  ```typescript
  // <类型>变量
  let s: string
  let f: unknown
  s = <string>f
  ```
  

## 6. 类型的别名

```typescript
type myType = 1 | 2 | 3 | 4 | 5
let k: myType
let l: myType
let m: myType
```
