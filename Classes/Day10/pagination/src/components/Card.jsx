import React from 'react'
import { useMemo } from "react";

export const Card = React.memo((/*{name,passenger,country,slogan,head_quaters}*/{userid,title,body}) => {
  return (
    <div className='card'>
        {/* <h1>{name}</h1>
        <p>{passenger}</p>
        <p>{country}</p>
        <p>{slogan}</p>
        <p>{head_quaters}</p> */}
        <h1>{userid}</h1>
        <p>{title}</p>
        <p>{body}</p>
    </div>
  )
})
