---
title: 进阶使用
order: 4
---

## 1. 函数重载

重载允许一个函数接受不同数量或类型的参数时，作出不同的处理

例：

```typescript
function hello(name: string);
function hello(age: number);
function hello(value: string | number): string {
    if (typeof value === 'string') {
        return `你好，我的名字是${value}`;
    } else if (typeof value === 'number') {
        return `你好，我的年龄是${value}`;
    } else {
        return '非法格式';
    }
}

hello('zhf');
hello(21);
```

## 2. 接口继承

使用`extends`

例：

```typescript
interface Parent {
    prop1: string;
    prop2: number;
}

interface Child extends Parent {
    prop3: string;
}

const myObj: Child = {
    prop1: '',
    prop2: 1,
    prop3: '',
};
```

## 3. 类相关

### 1. public private 和 protected

TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 `public`、`private` 和 `protected`

- `public`：公共成员，可以在类内部和外部访问。
- `private`：私有成员，只能在类内部访问。
- `protected`：受保护成员，可以在派生类（子类）中访问，但在类外部是不可访问的

```typescript
class Animal {
    public name: string;
    private age: number;
    protected type: string;

    constructor(name: string, age: number, type: string) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    public displayAge(): void {
        console.log(`Age: ${this.age}`);
    }

    private displayType(): void {
        console.log(`Type: ${this.type}`);
    }
}

class Dog extends Animal {
    public displayType(): void {
        console.log(`Type: ${this.type}`); // 可以访问父类的受保护成员
    }
}

let animal = new Animal("Tom", 5, "Mammal");
console.log(animal.name); // 可以访问公共成员
animal.displayAge(); // 可以调用公共方法
// animal.age; // 无法访问私有成员
// animal.type; // 无法访问受保护成员

let dog = new Dog("Buddy", 3, "Mammal");
// dog.type; // 无法访问受保护成员
dog.displayType(); // 可以调用继承而来的受保护方法
```

### 2. readonly

在 TypeScript 中，可以使用 `readonly` 关键字来定义只读属性，即一旦被赋值后便不能再被修改的属性。只读属性必须在声明时或在构造函数中被初始化，并且不能在之后的代码中重新赋值

```typescript
class Car {
    readonly make: string;
    readonly model: string;
    readonly year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make; // 只读属性在构造函数中初始化
        this.model = model;
        this.year = year;
    }

    updateYear(newYear: number): void {
        // this.year = newYear; // 无法重新赋值只读属性
    }
}

let myCar = new Car("Toyota", "Camry", 2020);
// myCar.make = "Honda"; // 无法重新赋值只读属性
// myCar.model = "Accord"; // 无法重新赋值只读属性
// myCar.year = 2021; // 无法重新赋值只读属性
```

### 3. 抽象类

在 TypeScript 中，可以使用抽象类来定义一个不能被直接实例化的类，而只能被继承的类。抽象类可以包含抽象方法和非抽象方法。抽象方法是没有实现的方法，而是由子类来实现

```typescript
abstract class Animal {
    abstract makeSound(): void; // 抽象方法，没有实现

    move(): void { // 非抽象方法，有实现
        console.log("Moving...");
    }
}

class Dog extends Animal {
    makeSound(): void { // 实现抽象方法
        console.log("Woof! Woof!");
    }
}

// let animal = new Animal(); // 无法直接实例化抽象类
let dog = new Dog();
dog.makeSound(); // 调用子类实现的抽象方法
dog.move(); // 调用继承而来的非抽象方法
```

### 4. 类实现接口

实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 `implements` 关键字来实现

```typescript
// 定义一个接口
interface Animal {
    makeSound(): void;
}

// 实现接口的类
class Dog implements Animal {
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

// 使用实现了接口的类
let myDog = new Dog();
myDog.makeSound(); // 输出：Woof! Woof!
```


