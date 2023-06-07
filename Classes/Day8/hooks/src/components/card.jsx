import React, { useState } from 'react'

export const Card = () => {
    const[change,setChange] = useState([]);
    const handleclick=()=>{
        setChange([
            1,2,3,4
        ]
        );
    }
console.log(change);
  return (
    <div className='card'>
       { change==="" ?<h1>Card</h1>:<h1>Card selected</h1>}
        <button className='btn' onClick={handleclick}>Click me!!</button>

    </div>
  )
}
