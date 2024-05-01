import React, { Fragment, useEffect, useRef, useState } from 'react'

function Refer() {

    const [inputValue , setinputValue] = useState("")
    // const [count , setCount] = useState(0)
    const count = useRef(0)
 
    useEffect (() => {
        count.current = count.current+1
    }, [inputValue])

  return (
    <Fragment>
        <input type="text" value={inputValue} placeholder="Type here..." onChange={(el) => setinputValue(el.target.value)} />
        {
            console.log(inputValue)
        } 
        <h3 style={{textAlign:"center"}}> Render Count : {count.current} </h3> 
    </Fragment>
  );
};

export default Refer
