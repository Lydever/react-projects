import React, { Component } from 'react'
import ReactDOM from "rc-slider/es/Handle";

export default class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      num: 0
    }
  }

  render() {
    return (
      <div>
        <h2>{ this.state.num }</h2>
        <button onClick={this.addNum.bind(this)}>累加</button>
      </div>
    )
  }

  addNum() {
    this.setState({
      num: this.state.num + 1
    })
  }

}

// ReactDOM.render(<Counter/>, document.getElementById('app'))
