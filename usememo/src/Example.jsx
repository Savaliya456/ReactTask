import React from 'react'
import { useState, useMeno } from 'react'
function Example(){
    const [isDarkMode, setisDarkMode] = useState(false)
    const theme = useMemo (()=>{
    return {
        backgroundColor: islaridlode ? "black": "white", 
        color: isDaridlode ? "white": "black"
    }
}, [isDarkMode])
    document.body.style.backgroundColor = theme.backgroundColor 
    document.body.style.colo = theme.color
    return (
        <div>
            <button onClick={()=>setisDarkMode(!isDarkMode)}>Toggle Mode</button>
            <h1>Girish</h1>
        </div>
    )
}