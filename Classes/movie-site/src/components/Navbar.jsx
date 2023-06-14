import React from 'react'
import SearchContext from './searchContext';
import '../styles/Navbar.css';
import { useContext } from 'react';

export const Navbar = () => {
  const {search, updateSearch}=useContext(SearchContext);
    const handleChange = e => {
        updateSearch(e.target.value);
      };
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
        <div className="search-post">
        <span>
          <input
            type="text"
            placeholder="Search.."
            id="search"
            value={search}
            onChange={e => handleChange(e)}
          />
          {/* <button type="submit" id="btn" onClick={searchData}>
            Search
          </button> */}
        </span>
        {/* <button type="submit" id="btn" onClick={postData}>
          Add Movie
        </button> */}
      </div>
    </div>
  )
}
