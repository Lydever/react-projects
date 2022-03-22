import {Fragment, useReducer} from 'react'

// 1. 定义一个reducer
function numReducer(state, action) {
  // 3. 进行一步深拷贝，因为state是不允许直接修改的
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'add':
      newState.num++;
      return newState
    case 'cut':
      newState.num--;
      return newState;
    default:
      return newState
  }
}

function App4() {
  // 2. 使用reducer并解构出state与dispatch，{num：0}表示state的默认值
  const [state,dispatch] = useReducer(numReducer, {num:0})

  return
  <Fragment>
    <h2>{ state.num }</h2>
  {/*  使用dispatch调用 */}
  <button onClick={() => dispatch({type: 'add'})}>累加</button>
    <button onClick={() => dispatch({type: 'cut'})}>减少</button>
  </Fragment>
}

export default App4
