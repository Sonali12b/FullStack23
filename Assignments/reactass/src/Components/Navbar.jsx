
import React from 'react'
import './Navbar.css'
import { AiFillHome } from "react-icons/ai";
import {  ImSearch} from "react-icons/im";
import {BiCategoryAlt} from 'react-icons/bi';
import {GrFormAdd} from 'react-icons/gr'

export const Navbar = () => {
  return (
  <div id="navbar"> 
    <ul className="nav-menu" id="nav-menu">
      <li><a href="#movie" ><AiFillHome/></a></li>
      <li><a href="#search" ><ImSearch/></a></li>
      <li><a href="#category" ><BiCategoryAlt/></a></li>
      <li><a href="#addmovie" ><GrFormAdd/></a> </li>
    </ul>
  </div>
  )
}
