import React from 'react'
import Offcanvas from './Offcanvas'
import { IoSearch } from "react-icons/io5";
import Offcanvasright2 from './Offcanvasright2';
import { CiHeart } from "react-icons/ci";
import Offcanvasright from './Offcanvasright';

function Header() {
  return (
    <div className='header'>
      <Offcanvas/> <br></br> <br></br> Menu
      <span className='search'><IoSearch/></span> <br></br> <br></br> &nbsp; Search
      <h2 className='louis'>LOUIS VUITTON</h2>
      <Offcanvasright2/>
      <span className='heart'><CiHeart/></span>
      <Offcanvasright/>
    </div>

  )
}

export default Header