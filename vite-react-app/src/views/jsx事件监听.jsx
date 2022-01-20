/**
 * 3.3. jsx事件监听
 3.3.1. 和原生绑定区别
 如果原生DOM原生有一个监听事件，我们可以如何操作呢？

 方式一：获取DOM原生，添加监听事件；
 方式二：在HTML原生中，直接绑定onclick；
 */

/**
 * React中的事件监听，这里主要有两点不同
    - React 事件的命名采用小驼峰式（camelCase），而不是纯小写；
    - 我们需要通过{}传入一个事件处理函数，这个函数会在事件发生时被执行；
 */
class App extends React.Component{
  render() {
    return (
      <div>
        <button onClick={this.btnClick}>别说话，点我(React)！</button>
      </div>
    )
  }
  btnClick() {
    console.log('React 点我一下')
  }
}
