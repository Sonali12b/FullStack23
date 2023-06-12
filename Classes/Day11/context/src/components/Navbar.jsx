import React, { useContext } from 'react'
import  SearchContext  from "./searchContext";

export const Navbar = () => {
    const {search, updateSearch}=useContext(SearchContext);
    const handleChange = e => {
        updateSearch(e.target.value);
      };
  return (
    <div>
        <input type="text"
        placeholder='search..'
        value={search}
        onChange={(e)=> handleChange(e)} />

    </div>
  )
}
