class App extends React.Component{
  /**
   * 情况一：当变量是Number、String、Array类型时，可以直接显示
   情况二：当变量是null、undefined、Boolean类型时，内容为空；
          - 如果希望可以显示null、undefined、Boolean，那么需要转成字符串；
          - 转换的方式有很多，比如toString方法、和空字符串拼接，String(变量)等方式；
   情况三：对象类型不能作为子元素（not valid as a React child）
   */
  constructor(props) {
    super(props);

    this.state = {
      name: '李子',
      age: 1,
      hobbies: ["音乐", "睡觉", "代码"],
      test1: null,
      test2: undefined,
      flag: false,
      info: {
        name: '李子',
        age: 1
      }
    }
  }

  render() {
    return (
      <div>
        <h2>Hello World</h2>

        <div>
          {/*显示*/}
          <h2>{this.state.name}</h2>
          <h2>{this.state.age}</h2>
          <h2>{this.state.hobbies}</h2>

          {/*不显示*/}
          <h2>{this.state.test1}</h2>
          <h2>{this.state.test2}</h2>
          <h2>{this.state.flag}</h2>

           {/*不显示*/}
          <h2>12{this.state.info}</h2>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))

class App2 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    }
  }
  render() {
    return(
      <div>
        {this.state.flag ? <h2>我是标题</h2>: null}
        {this.state.flag && <h2>我是标题</h2>}
      </div>
    )
  }

}

/**
 * JSX嵌入表达式
 */

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'aa',
      lastName: 'bb',
      age: 1
    }
  }
  render() {
    return(
      <div>
        {/*运算表达式*/}
        <h2>{this.state.firstName + " " + this.state.lastName}</h2>
        {/*三元运算符*/}
        <h2>{this.state.age >= 18 ? '成年人':'未成年人'}</h2>
        {/*执行一个函数*/}
        <h2>{this.sayHello('hello world')}</h2>
      </div>
    )
  }

  sayHello(name) {
    return "hello" + name;
  }

}
