import React, { useState } from 'react'
import axios from 'axios'

function AddPost() {
    const [pid, setid] = useState(1) 
    const [post, setpost] = useState({
        id : pid,
        title: '',
        detail: ''
    })

    function handleChange(e){
        setpost({...post, id : pid ,[e.target.name] : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:8000/posts',post)
        .then((res)=>{
            setid(pid+1)
            alert("Successfully Add post " + pid)
        }) .catch((err)=>{
            console.log(err)
        }) 

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='title' placeholder='Enter Title' onChange={handleChange} value={post.title} /><br /><br />
                <input type="text" name='detail' placeholder='Enter Post Detail' onChange={handleChange} value={post.detail} /><br /><br />
                <button type='submit'>Add Post</button>
            </form>
        </div>
    )
}

export default AddPost
