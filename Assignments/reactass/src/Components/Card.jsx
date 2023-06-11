import React from 'react';
import './Card.css' ;
export const Card = ({title,img,desc,rating}) => {
  return (
    <div className="post">
    <div className="info">
        <div className="user">
            <p className="username">{title}</p>
        </div>
    </div>
    <img src={img} alt="" srcset="" className='post-image'/>
    <div className="post-content">
        <p className="description"> {desc}</p>
        <p className="post-time">{rating}</p>
    </div>
    <div className="comment">
        <input type="text" className="comment-box" placeholder="Add a comment"/>
        <button className="comment-btn">post</button>
    </div>
</div>
  )
}
