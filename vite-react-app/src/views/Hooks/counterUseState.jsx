import React, { useState } from 'react'

function CounterUseState() {
  // 这里的userState(0)的0，就是定义num的初始值
  const [num, setNum] = useState(0);

  return (
    <div>
      <h2>{num}</h2>
      <h2>点我嘿嘿</h2>
      <button onClick={() => {setNum(num+1)}}>累加</button>
    </div>
  )
}

export default CounterUseState;
