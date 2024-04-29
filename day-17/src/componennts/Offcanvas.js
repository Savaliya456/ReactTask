import React from 'react'
import { MdMenu } from "react-icons/md";

function Offcanvas() {
  return (
    <div><button class="btn button1" style={{fontSize : '30px'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
    <MdMenu/>
  </button>
  
  <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div>
        I will not close if you click outside of me.
      </div>
    </div>
  </div></div>
  )
}

export default Offcanvas