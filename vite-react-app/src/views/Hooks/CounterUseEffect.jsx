import React, { Component, useState,useEffect } from 'react'
/*

export default class CounterUseEffect extends Component{
  constructor(props) {
    super(props);
    this.state = { num: 0}
  }

  render() {
    return(
      <div>
        <h2>{this.state.num}</h2>
        <button onClick={this.addNum.bind(this)}>累加</button>
      </div>
    )
  }
  // 监测数据
  componentDidMount() {
    console.log('Mount')
  }
  componentDidUpdate() {
    console.log('Update')
  }
  addNum(){
    this.setState({
      num: this.state.num+1
    })
  }

}
*/

function CounterUseEffect(){
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log('useEffect')
  })

  return (
    <div>
      <h2>使用useEffect监测数据</h2>
      <h2>{ num }</h2>
      <button onClick={() => {setNum(num+1)}}>累加</button>
    </div>
  )

}

function CounterUseEffect2() {
  const [num,setNum] = useEffect(0)
  const [num1, setNum1] = useEffect(1)

  useEffect(() => {
    console.log('视更新了')
  }, [num]) // 这类只检测num更新，num1的更新不会检测到

  return(
    <div>
      <h1>{num}</h1>
      <button onClick={()=>setNum(num+1)}>累加</button>
      <h1>{num1}</h1>
      <button onClick={()=>setNum1(num1+1)}>累加</button>
    </div>
  )
}

/*
* componentWillUnmount
当我们需要在组件销毁时做一些清除工作，就需要使用componentWillUnmount。但函数式编程没有这个生命周期，因此也同样需要借助useEffect实现。
* */

function CounterUseEffect3() {
  const [num,setNum] = useEffect(0)
  const [num1, setNum1] = useEffect(1)

  //  这个hook监测num更新
  useEffect(() => {
    console.log('视更新了')
  }, [num]) // 这类只检测num更新，num1的更新不会检测到

  // 这个hook监测离开组件
  useEffect(() => {
    return () => {
      console.log('离开了组件')
    }
  }, []) // []代表这个useEffect不检测任何一个字段更新

  /*
  * 同个useEffect下，在检测销毁和检测字段更新之间，只能二选一。
  * 留下空数组，可以检测到return中的销毁。数组非空时，
  * 视图更新会带动return返回值，因此如果要检测字段更新，就无法检测销毁。
  * */

}

export default CounterUseEffect

