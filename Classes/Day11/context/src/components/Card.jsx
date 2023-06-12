
import React from 'react'

export const Card = ({userid,title,body}) => {
  return (
    <div className='card'>
        <h1>{userid}</h1>
        <p>{title}</p>
        <p>{body}</p>
    </div>
  )
}
