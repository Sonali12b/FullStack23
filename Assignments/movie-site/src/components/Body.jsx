import React, { useState,useEffect } from 'react'
import { Movie } from './Movie-card'
import { Navbar } from './Navbar'
import "../styles/Body.css";
import "../styles/Navbar.css"
export const Body = () => {
    const [arr,setArr]=useState([]);

    /*getData*/
    const getData=async()=>{
        await fetch("http://localhost:3002/movie",{
            method:"GET",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setArr(data)
        })
    }
    useEffect(()=>{
        getData();
    },[]);

    /*postData*/
    const postData = async () => {
        const title=prompt("Enter the new title:","NA");
        const img=prompt("Enter the new imageurl:","NA");
        const desc=prompt("Enter the description:","NA");
        const rating=prompt("rate(out of 10):",0);
        await fetch("http://localhost:3002/movie", {
          method: "POST",
          body: JSON.stringify({
            id: Date.now(),
            title: title,
            img:img,
            desc: desc,
            rating:rating
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(res => {
          res.json();
          getData();
        });
      };



    /*updateData*/
    const updateData=async id=>{
        console.log(id);
        const title=prompt("Enter the new title:");
        const img=prompt("Enter the new imageurl:");
        const desc=prompt("Enter the description:");
        const rating=prompt("rate(out of 10):");

        await fetch(`http://localhost:3002/movie/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:title,
                img:img,
                desc:desc,
                rating:rating
            }),
        }).then(res=>{
            if(res.ok){
                getData();
            }
        })
    }

    /*deleteData*/
    const deleteData= async id=>{
        await fetch(`http://localhost:3002/movie/${id}`,{
            method:"DELETE",
        }).then(res=>{
            if(res.ok){
                alert("Deleted");
                getData();
            }
        })
    }

  return (
    <div className='body'>
        <Navbar/>
        <div className='search-post'>
          <span><input type='text' placeholder='Search..' id='search'/><button type='submit' id='btn'>Search</button></span>  
            <button type='submit' id='btn' onClick={postData}>Add Movie</button>
        </div>
       <div className='movie-body'>
        {
            arr.map(el=>{
                return(
                    <Movie title={el.title}
                        img={el.img}
                        desc={el.desc}
                        rating={el.rating}
                        updatehandle={()=>updateData(el.id)}
                        deletehandle={()=>deleteData(el.id)}
                        />
                )
            })
        }
       </div>
    </div>
  )
}
