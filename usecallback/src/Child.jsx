import React, { memo } from 'react'
import { useState } from 'react'

function Child({counter , handleInc}) {
  console.log("child component")
  return (
    <div> 
      <h4>Child</h4>
      <h5>counter : {counter}</h5>
      <button
        onClick={handleInc}
      >
          +
      </button>
    </div>
  )
}

export default memo(Child)