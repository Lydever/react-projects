
/*
* 函数式的组件，如果需要父传子，那么就需要使用useContext。
* */

import { useState,createContext,useContext } from 'react'

// 1. 创建上下文
const NumContext = createContext();

// 子组件
function Count() {
  // 3. 调用上下文内容
  const num = useContext(NumContext)
  return (
    <h2>{num}</h2>
  )
}

function App3() {
  const [num, setNum] = useState(0)
  return (
    <>
    {/*  2. 设置提供器，并传入value， 包含子组件*/}
      <NumContext.Provider value={num}>
        <Count />
      </NumContext.Provider>
      <button onClick={() => {setNum(num+1)}}>累加</button>
    </>

  )
}
