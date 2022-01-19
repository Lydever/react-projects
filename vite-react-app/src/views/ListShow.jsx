class ListShow  extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      books: ['《深入理解计算机系统》','《JavaScript 权威指南》','《算法导论》']
    }
  }

  render() {
    return(
      <div>
        <h2>技术书籍</h2>
        <ul>
          {
            this.state.books.map((item, index) => {
              return (<li>{item}</li>)
            })
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<ListShow/>, document.getElementById('app'));
