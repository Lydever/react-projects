/**
 * 在事件执行后，我们可能需要获取当前类的对象中相关的属性：
  - 比如我们这里打印：this.state.message
    - 但是这里会报错：Cannot read property 'state' of undefined
    - 原因是this在这里是undefined
  - 如果我们这里直接打印this，也会发现它是一个undefined
 */
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      message: '例如按'
    }
    this.btnClick = this.btnClick.bind(this)
  }

  render() {
    return(
      <div>
        <button onClick={this.btnClick.bind(this)}></button>
        /**
        * 方案一：bind给btnClick显示绑定this
        在传入函数时，我们可以主动绑定this：
        这里我们主动将btnClick中的this通过bind来进行绑定（显示绑定）
        那么之后React内部调用btnClick函数时，就会有一个this，并且是我们绑定的this；
        */
        button
      </div>
    )
  }



}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "你好啊,李银河"
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.btnClick}>点我一下(React)</button>
        <button onClick={this.btnClick}>也点我一下(React)</button>
      </div>
    )
  }

  btnClick = () => {
    console.log(this);
    console.log(this.state.message);
  }
}

/**
 * 方案三： 事件监听传入箭头函数(推荐)
 * 因为onClick中要求传入一个箭头函数，那么我们可以直接定义一个箭头函数传入：
 *   - 传入的箭头函数的函数体是我们需要执行的代码，我们直接执行this.btnClick();
 *   - this.btnClick()中通过this来指定会隐式绑定，最终this也是正确的
 *
 */
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      message: 'dsjdsd'
    }
  }
  render() {
    return (
      <div>
      <button onClick={() =>this.btnClick}>点我</button>
      <button onClick={() =>this.btnClick}>点我</button>
      </div>
    )
  }
  btnClick() {
    console.log(this);
    console.log(this.state.message)
  }
}
