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

export default CounterUseEffect

