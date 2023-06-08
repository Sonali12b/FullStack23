import React, { useState } from 'react'
import './Card.css';
export const Card = ({title,url,thumbnailUrl,onclick}) => {
    // const[change,setChange] = useState([]);
    // const handleclick=()=>{
    //     setChange([
    //         1,2,3,4
    //     ]
    //     );
    // }
// console.log(change);
  return (

    <div className='card'>
       {/* { change==="" ?<h1>Card</h1>:<h1>Card selected</h1>}
        <button className='btn' onClick={handleclick}>Click me!!</button> */}
        <img src={url} alt="" className="image" />
        <p className="title">{title}</p>
        <img src={thumbnailUrl} alt="" className="thumb" />
        <button onClick={onclick}></button>

    </div>
  )
}
