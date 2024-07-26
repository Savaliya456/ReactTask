import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parent() {
    const [count , setCount] = useState(0)
    const [counter , setCounter] = useState(0)

    const handleIncrement = () => {
      setCount(count + 1)
    }

    const handleInc = useCallback(()=>{
      setCounter(counter + 1)
    }, [counter])

  return (
    <div>
        <h1>Counter : {count}</h1>
      <button onClick={handleIncrement}>
        plus
      </button>
      <Child counter={counter} handleInc={handleInc} />
    </div>
  )
}

export default Parent