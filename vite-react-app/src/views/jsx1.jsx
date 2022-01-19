// es6 之前
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.running = function () {
  console.log(this.name + this.age + "running");
}

let p = new Person("liyingxia", 1);
p.running();

// es6
/**
 * 转换成ES6中的类如何定义呢？
 类中有一个constructor构造方法，当我们通过new关键字调用时，就会默认执行这个构造方法
 构造方法中可以给当前对象添加属性
 类中也可以定义其他方法，这些方法会被放到Person类的prototype上
 */
class Peson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  running() {
    console.log(this.name + this.age + "running")
  }
}

const p = new Person("lizi", 1);
p.running();

// 属性也可以直接电仪在类中：
// - height 和address 是直接定义在类中
class Person {
  height = 1.88;
  address = '广州';

  constructor(name, age) {
    this.name  = name;
    this.age = age;
  }

  studying() {
    console.log(this.name + this.age + "studying");
  }
}

/**
 * 类的继承
 *
 * 继承是面向对象的一大特性，可以减少我们重复代码的编写，方便公共内容的抽取（也是很多面向对象语言中，多态的前提）。
 ES6中增加了extends关键字来作为类的继承。
 我们先写两个类没有继承的情况下，它们存在的重复代码：
 */
// Person类和Student类
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  running() {
    console.log(this.name, this.age, "running")
  }
}

class Student {
  constructor(name, age, sno, score) {
    this.name = name;
    this.age = age;
    this.sno = sno;
    this.score = score;
  }

  running() {
    console.log(this.name, this.age, "running")
  }

  studying() {
    console.log(this.name, this.age, this.sno, this.score, "studying")
  }
}

/**
 * 使用继承来继承简化代码
 * 注意在constructor 中，子类必须通过super来调用父类的构造方法，对父类进行初始化，否则会报错
 */
class Student1 extends Person{
  constructor(name, age, sno, score) {
    super(name, age);
    this.sno = sno;
    this.score = score;
  }

  studying() {
    console.log(this.name, this.age, this.sno, this.score, "studying")
  }
}

const stu1 = new Student1("lizi", 11,11,100)
stu1.studying();










