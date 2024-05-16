import React, {useState} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

function Editpost({editPost, posts}) {

  const{id} = useParams()

  let ans = posts.find(post=> post.id === parseInt(id))

  console.log(id)
  const [title, setTitle] = useState(ans.title)
  const [content, setContent] = useState(ans.content)
  const navigate = useNavigate()
  function handleSubmit(e){
  e.preventDefault()
  editPost(ans.id, title, content)
  navigate('/')
  }

  return (
    <>
        <h1>Edit PAGE</h1>
        <form onSubmit={handleSubmit}>
            <h1>Title: </h1>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} />
            <br/> <br/> <br/>

            <h1>Content: </h1>
            <textarea value={content} onChange={(e)=>setContent(e.value)}></textarea> 
            <br/> <br/> <br/>

            <button type='submit'>Submit</button>
        </form>
        <br/> <br/> <br/>
        <Link to="/">BACK TO HOME</Link>
    </>
  )
}

export default Editpost