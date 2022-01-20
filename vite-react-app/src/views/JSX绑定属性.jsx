/**
 * jsx绑定属性
 * 很多时候，描述的HTML原生会有一些属性，而我们希望这些属性也是动态的：

 比如元素都会有title属性
 比如img元素会有src属性
 比如a元素会有href属性
 比如元素可能需要绑定class
    - 注意：绑定class比较特殊，因为class在js中是一个关键字，所以jsx中不允许直接写class，写法：使用className替代
 比如原生使用内联样式style
    - style后面跟的是一个对象类型，对象中是样式的属性名和属性值；
    - 注意：这里会讲属性名转成驼峰标识，而不是连接符-；
 */

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: 'hello',
      imgUrl: '',
      link: '',
      active: false
    }
  }
  render() {
    return(
      <div>
        <h2 title={this.state.title}>Hello World</h2>
        <img src="{this.state.imgUrl}" alt=""/>
        <a href="{this.state.link}" target={_blank}>百度一下</a>
        <div className={"message" + (this.state.active ? 'active' : '' )}>点我</div>
        <div className={["message" + (this.state.active ? 'active' : '')].join('')}>点我</div>
        <div style={{fontSize: '20px', color: 'red', background: 'red'}}>我是文字</div>
      </div>
    )
  }

}
