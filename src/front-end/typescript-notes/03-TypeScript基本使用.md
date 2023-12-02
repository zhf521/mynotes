---
title: 基本使用
order: 3
---

## 1. 类型声明

- 类型声明是TS非常重要的一个特点
- 通过类型声明可以指定TS中变量（参数、形参）的类型
- 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错
- 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值

语法：

```typescript
let 变量: 类型;

let 变量: 类型 = 值;
```

## 2. 自动类型推断

TS拥有自动的类型推断机制，当对变量的声明和赋值是同时进行的，TS编译器会自动推断变量的类型，所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明

## 3. 类型断言

有些情况下，变量的类型对于我们来说是很明确，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式：

- 第一种

  ```typescript
  // 变量 as 类型
  let s: string;
  let f: unknown;
  s = f as string;
  ```

- 第二种

  ```typescript
  // <类型>变量
  let s: string;
  let f: unknown;
  s = <string>f;
  ```

## 4. 基础数据类型和联合类型

### 1. 基础数据类型

- number

  ```typescript
  let decimal: number = 6;
  let hex: number = 0xf00d;
  let binary: number = 0b1010;
  let octal: number = 0o744;
  let big: bigint = 100n;
  ```

  ```typescript
  // 声明一个变量a，同时指定它的类型为number
  let a: number;
  // a的类型设置为了number,在以后的使用过程中a的值只能是数字
  a = 10;
  a = 'hello'; //代码会报错，因为变量a的类型是number，不能赋值字符串
  ```

- boolean

  ```typescript
  let isDone: boolean = false;
  ```

- string

  ```typescript
  let b: string;
  b = 'hello';
  b = 123; //报错
  ```
  
- null

  ```typescript
  let nu: null = null;
  ```
  
- undefined

  ```typescript
  let un: undefined = undefined;
  ```

### 2. 联合类型

联合类型表示取值可以为多种类型中的一种

联合类型使用 `|` 分隔每个类型

```typescript
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们**只能访问此联合类型的所有类型里共有的属性或方法**：

## 5. 数组

语法：

```typescript
// 第一种
类型[]
// 第二种
Array<类型>
```

例：

```typescript
// string[] 表示字符串数组
let e:string[];
e = ['a', 'b', 'c'];

// number[] 表示数值数组
let f: number[];
f = [1, 2, 3, 4];

let g: Array<number>;
g = [1, 2, 3];
```

## 6. 元组

数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象

语法：

```typescript
let 变量: [类型1, 类型2, 类型3?];
```

注意：可以使用`?`来表示可选的值

例：

```typescript
let h: [string, string];
h = ['hello', 'abc'];
```

## 7. 枚举

枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等

枚举使用 `enum` 关键字来定义：

```typescript
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
```

枚举成员会被赋值为从 `0` 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：

```typescript
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
```

## 8. 函数

```typescript
function MyFn(a = 10,b: 类型,c?: 类型,...rest:数组类型):返回值类型{
    return c;
}
```

注意：

+ 可以使用默认参数

+ `?`表示可选的值，可选参数要在必选参数后面
+ 剩余参数是数组类型

## 9. 接口

使用接口来定义对象的类型

```typescript
interface Obj{
    name: string,
    age: number,
};

const obj: Obj = {
    name: 'a',
    age: 10,
};
```

## 10. 类型别名

类型别名用来给一个类型起个新名字

```typescript
type MyUserName = string | number;
// 原来的写法
let a: string | number = 10;
// 使用类型别名
let a: MyUserName = 'abc';
```

## 11. 泛型

定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定），此时泛型便能够发挥作用

举个例子：

```typescript
function test(arg: any): any{
	return arg;
}
```

上例中，test函数有一个参数类型不确定，但是能确定的时其返回值的类型和参数的类型是相同的，由于类型不确定所以参数和返回值均使用了any，但是很明显这样做是不合适的，首先使用any会关闭TS的类型检查，其次这样设置也不能体现出参数和返回值是相同的类型

使用泛型：

```typescript
function test<T>(arg: T): T{
	return arg;
}
```

这里的```<T>```就是泛型，T是我们给这个类型起的名字（不一定非叫T），设置泛型后即可在函数中使用T来表示该类型

所以泛型其实很好理解，就表示某个类型

那么如何使用上边的函数呢？

- 方式一（直接使用）：

  使用时可以直接传递参数使用，类型会由TS自动推断出来，但有时编译器无法自动推断时还需要使用下面的方式

  ```typescript
  test(10);
  ```

- 方式二（指定类型）：

  可以在函数后手动指定泛型

  ```typescript
  test<number>(10);
  ```

可以同时指定多个泛型，泛型间使用逗号隔开：

```typescript
function test<T, K>(a: T, b: K): K{
    return b;
}

test<number, string>(10, "hello");
```

使用泛型时，完全可以将泛型当成是一个普通的类去使用

类中同样可以使用泛型：

```typescript
class MyClass<T>{
    prop: T;

    constructor(prop: T){
        this.prop = prop;
    }
}
```

除此之外，也可以对泛型的范围进行约束

```typescript
interface MyInter{
    length: number;
};

function test<T extends MyInter>(arg: T): number{
    return arg.length;
}
```

使用`T extends MyInter`表示泛型T必须是MyInter的子类，不一定非要使用接口，类和抽象类同样适用

