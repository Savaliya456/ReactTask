import React from 'react'
import { Link } from 'react-router-dom'

function Home({posts , deletePost}) {
    function handleDelete(id){
        deletePost(id)
    }
return (
    <div>
        <h1>WELCOME TO OUR APP</h1>
        {
        posts.map((el)=>(
            <>
            <h2>{el.title}</h2>
            <p>{el.content}</p>
            <button onClick={()=>handleDelete(el.id)}>Delete</button>
            <Link to={`/edit/${el.id}`}><button>Edit Blog</button></Link>
            <br/><br/><br/>
            </>
        ))
    }
        <Link to="/add">ADD POST</Link>
    </div>
    )
}

export default Home