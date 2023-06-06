import React from 'react'
import './Card.css' ;
import {BsChat} from "react-icons/bs";

export const Navbar = () => {
  return (
    <div class="bar">
      <a href="#Instagram" id='insta'>instagram</a>
      <a href="#reels">Reels</a>
      <a href="#search">Search</a>
      <a href="#dm" class="split"><span className='chat'><BsChat/></span>DM</a>
</div>
    
  )
}
