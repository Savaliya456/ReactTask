import React from 'react'
import { increment, decrement } from './store'
import {useSelector, useDispatch} from 'react-redux'

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((a)=>a.count)

  return (
    <div>
      <center>
        <h1>Counter : {count}</h1>
        <button onClick={()=>dispatch(increment())}>+</button> &nbsp;&nbsp;&nbsp;
        <button onClick={()=>dispatch(decrement())}>-</button>
      </center>
    </div>
  )
}

export default Counter
