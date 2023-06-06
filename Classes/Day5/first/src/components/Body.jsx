import React from 'react'
import { Card } from './Card'

export const Body= () => {
  const arr=[
    {
      "username":"sonali24b",
      "post":"https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "caption":"Lost case!!",
      "time":"2 minutes ago"
    },{
      "username":"sonali24b",
      "post":"https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "caption":"Lost case!!",
      "time":"2 minutes ago"
    },{
      "username":"sonali24b",
      "post":"https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      "caption":"Lost case!!",
      "time":"2 minutes ago"
    }
  ]
  return (
    <div className='card-body'>
    {arr.map((el)=>{
      return(
      <Card username={el.username} post={el.post} caption={el.caption} time={el.time} />)
      })
      }
    </div>
  )
}
