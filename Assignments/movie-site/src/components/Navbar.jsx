import React from 'react'
import {BsSearch} from 'react-icons/bs'
import '../styles/Navbar.css';
export const Navbar = () => {
  return (
    <div className='nav'>
        <div className='container'>
       <span><img src="https://i.pinimg.com/originals/ea/8d/11/ea8d11f1ffc6355b8a440106ce61d0f3.jpg"  />
       <a href='#' className='logo'>MoviesCorner</a></span>
            
            <ul className='options'>
            <li className='tvseries'>tvseries</li>
            <li className='movies'>movies</li>
            <li className='trending'>trending</li>
            </ul>
        </div>
    </div>
  )
}
