
import React from 'react'
import { useState } from 'react'
import img from './image.png'

function Count() {
    const[like, setLike] = useState(0);
    const[dislike, setDislike] = useState(0);
    
    function likeC(){
         setLike(like+1)
      }
        function dislikeC(){
            setDislike(dislike+1)
        }
        function clear(){
            setLike(0)
            setDislike(0)
        }

  return (
    <div>
      
      <center>
        <img src={img}></img>
            <div className='hook'>
              <div><i class="bi bi-hand-thumbs-up" onClick={likeC}></i> : {like}</div>
    
              <div> 
              <i class="bi bi-hand-thumbs-down" onClick={dislikeC}></i> : {dislike}
              </div>
              <div>
              <i class="bi bi-arrow-clockwise" onClick={clear}></i> 
              </div>
            </div>

       </center>


    </div>
  )
}

export default Count
