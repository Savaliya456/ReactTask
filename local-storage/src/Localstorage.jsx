import React from 'react'
import { useState } from 'react'

function Localstorage() {
    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([])
localStorage.setItem("todo", JSON.stringify(todos))
    function addTask() {
        let newTodos = {
        text : inputValue
        }
        setTodos ([...todos, newTodos])
        setInputValue('')
    }
return (
    <div>
        <h1>TODO LIST</h1>
        <input type='text' placeholder='Enter your Task' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>

        <button onClick={addTask}>ADD TASK</button>

        <h1>YOUR TASK</h1>

    {
        todos.map((el,i)=>(
            <h key={i}>{el.text}</h>
        ))
    }
        </div>
    )
}

export default Localstorage