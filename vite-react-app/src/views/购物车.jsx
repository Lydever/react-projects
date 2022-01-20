/**
 * @Description:
 * @Author:   liyingxia
 * @CreateDate:  2022/1/21 1:18
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.00,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.00,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.00,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128.00,
          count: 1
        },
      ]
    }
  }

  render() {
    const { books } = this.state;

    return (
      <div>
        <table>
          <thead>
          <tr>
            <th></th>
            <th>书籍名称</th>
            <th>出版日期</th>
            <th>价格</th>
            <th>购买数量</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          {
            books.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{"¥" + item.price}</td>
                  <td>
                    <button disabled={item.count <= 1} onClick={e => this.changeItem(index, -1)}>-</button>
                    <span className="counter">{item.count}</span>
                    <button onClick={e => this.changeItem(index, 1)}>+</button>
                  </td>
                  <td><button onClick={e => this.removeItem(index)}>移除</button></td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    )
  }

  // 价格的显示
  formatPrice(price) {
    if (typeof price !== "number") {
      price = Number(price) || 0;
    }
    return "￥" + price.toFixed(2)
  }
  changeItem(index,counter) {
    const books = [...this.state.books];
    this.setState({
      books: books.map((item, index) => {
        if (index ==indey) {
          iitem.count += counter;
        }
        return item
      })
    })
  }
  // 移除
  removeItem(index) {
    const books = [...this.state.books];
    this.setState({
      books: books.filter((item index) => {
        index !== indey
    })
    })
  }

}

ReactDOM.render(<App/>, document.getElementById("app"));
