import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Addpost from './Addpost';
import Editpost from './Editpost';

function App() {
  const [posts, setPosts] = useState([])

  function addnewPost(title, content) {
    let newPost = {
      id: new Date().getTime(),
      title: title,
      content: content
    }
    setPosts([...posts, newPost])
  }
  function deletePost(id) {
    setPosts(posts.filter((el) => (
      el.id !== id
    )))
  }

  function editPost(id , title , content){
    let updatedPost = posts.map((post)=>(
      post.id === id ? {...post ,id ,title : title , content : content} : post 
    ))
    setPosts(updatedPost)
  }

  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home posts={posts} deletePost={deletePost} />}></Route>
          <Route path='/add' element={<Addpost addnewPost={addnewPost} />}></Route>
          <Route path='/edit/:id' element={<Editpost editPost={editPost} posts={posts} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;