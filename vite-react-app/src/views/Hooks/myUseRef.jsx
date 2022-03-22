/*
*ref就是类似于id的属性，用于获取dom元素，比较简单：
* */

import {Fragment, useRef} from 'react'
function App5() {
  const el = useRef(null)

  const handleClick = () => {
    console.log(el.current) // 获取inout
    console.log(el.current.value) //获取input中的值
  }

  return(
    <Fragment>
      <input type="text" ref={el}/>
      <button onClick={handleClick}>获取input元素</button>
    </Fragment>
  )

}

export default App5
