import React from 'react'

export const Card = ({name,passenger,country,slogan,head_quaters}) => {
  return (
    <div className='card'>
        <h1>{name}</h1>
        <p>{passenger}</p>
        <p>{country}</p>
        <p>{slogan}</p>
        <p>{head_quaters}</p>
    </div>
  )
}
