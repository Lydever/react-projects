/**
 * 在事件执行后，我们可能需要获取当前类的对象中相关的属性：
  - 比如我们这里打印：this.state.message
    - 但是这里会报错：Cannot read property 'state' of undefined
    - 原因是this在这里是undefined
  - 如果我们这里直接打印this，也会发现它是一个undefined
 */
