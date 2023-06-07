import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import './Card.css' ;
export const Card = ({username,post,caption,time}) => {
  return (
    <div className="post">
    <div className="info">
        <div className="user">
            <div className="profile-pic"><FaInstagram/></div>
            <p className="username">{username}</p>
        </div>
    </div>
    <img src={post} alt="" srcset="" className='post-image'/>
    <div className="post-content">
        <p className="likes"><span className='desc'><AiOutlineHeart/></span>400 likes</p>
        <p className="description"> {caption}</p>
        <p className="post-time">{time}</p>
    </div>
    <div className="comment">
        <input type="text" className="comment-box" placeholder="Add a comment"/>
        <button className="comment-btn">post</button>
    </div>
</div>
  )
}
