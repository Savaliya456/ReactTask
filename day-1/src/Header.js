import React from 'react'
import bg1 from './bg1.jpg';

function Header() {
  return (
    <div>
      <header>
        <div classname="subheader">
        <div classname="logo">
            <p>
            <i classname="fa fa-microphone" style={{fontSize:'28px',color:'red'}}></i>
            Manup </p> 
        </div>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Speaker</a></li>
                <li><a href="">Schedule</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </div>
    </header>
    <div class="bg1">

        <div class="subbg">
            <div class="bg1a">
                <p>5 TO 9 MAY 2019, MARDAVALL HOTEL, NEW YORK</p> <br></br><br></br>
                <h1>Change Your Mind <br></br> To Become Sucess</h1> <br></br><br></br>
                <button>Buy Ticket</button>

            </div>
            <div class="bg1b">
                <img src={bg1} alt=""></img>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header
