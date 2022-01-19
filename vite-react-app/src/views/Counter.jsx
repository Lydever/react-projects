import ReactDOM from "rc-slider/es/Handle";

class Counter extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return(
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={this.increment.bind(this)}>+1</button>
        <button onClick={this.decrement.bind(this)}>-1</button>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1
    })
  }
}

ReactDOM.render(<Counter/>, document.getElementById('app'))
