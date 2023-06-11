import React from "react";
import "../styles/Movie-card.css";
export const Movie = ({title,img,desc,rating,updatehandle,deletehandle}) => {
  return (
    <div className="movie-card">
      <div className="post">
        <div className="info">
          <div className="user">
            <p className="username">{title}</p> 
          </div>
          <p className="post-time">{rating}</p> 
        </div>
        <img src={img} className="post-image" />
        <div className="post-content">
          <p className="description"> {desc}</p>
        </div>
        <div className="comment">
          <button className="comment-btn1" onClick={updatehandle}>Update</button>
          <button className="comment-btn2" onClick={deletehandle}>Delete</button>
        </div>
      </div>
    </div>
  );
};
