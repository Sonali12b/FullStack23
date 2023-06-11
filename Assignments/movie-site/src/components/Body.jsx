import React, { useState, useEffect } from "react";
import { Movie } from "./Movie-card";
import { Navbar } from "./Navbar";
import "../styles/Body.css";
import "../styles/Navbar.css";
export const Body = () => {
  const [arr, setArr] = useState([]);
  const [newarr, setnewArr] = useState([]);
  const [searchStr, getSearchStr] = useState("");
  const [page,setPage]=useState(1);
  const [wholeArr,setWholeArr]=useState([]);

  /*getData*/
  const getData = async () => {
    await fetch("http://localhost:3002/movie", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setWholeArr(data);
        const end=page*6;
        const start=page-1;
        const newData=data.slice(start*6,end)
        setArr(newData);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  /*postData*/
  const postData = async () => {
    const title = prompt("Enter the new title:", "NA");
    const img = prompt("Enter the new imageurl:", "NA");
    const desc = prompt("Enter the description:", "NA");
    const rating = prompt("rate(out of 10):", 0);
    await fetch("http://localhost:3002/movie", {
      method: "POST",
      body: JSON.stringify({
        id: Date.now(),
        title: title,
        img: img,
        desc: desc,
        rating: rating,
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
  const updateData = async id => {
    console.log(id);
    const title = prompt("Enter the new title:");
    // const img = prompt("Enter the new imageurl:");
    const desc = prompt("Enter the description:");
    const rating = prompt("rate(out of 10):");

    await fetch(`http://localhost:3002/movie/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        // img: img,
        desc: desc,
        rating: rating,
      }),
    }).then(res => {
      if (res.ok) {
        getData();
      }
    });
  };

  /*deleteData*/
  const deleteData = async id => {
    await fetch(`http://localhost:3002/movie/${id}`, {
      method: "DELETE",
    }).then(res => {
      if (res.ok) {
        alert("Deleted");
        getData();
      }
    });
  };

  /*searchData */
  const searchData=()=>{
    const newData = arr.filter(item=>item.title.includes(searchStr));
    console.log(newData);
    setnewArr(newData);
  }
  const handleChange = e => {
    getSearchStr(e.target.value);
  };
  useEffect(() => {
    searchData();
  }, [searchStr]);
  console.log(newarr);


  /*pagination*/
  const pageArr=[];
  let i=1;
  while(i<=Math.ceil(wholeArr.length/6)){
    pageArr.push(i);
    i++;
  }
  const handlePage=(el)=>{
    setPage(el);
  }

  useEffect(()=>{
    getData()
  },[page])


  return (
    <div className="body">
      <Navbar />
      <div className="search-post">
        <span>
          <input
            type="text"
            placeholder="Search.."
            id="search"
            value={searchStr}
            onChange={e => handleChange(e)}
          />
          <button type="submit" id="btn" onClick={searchData}>
            Search
          </button>
        </span>
        <button type="submit" id="btn" onClick={postData}>
          Add Movie
        </button>
      </div>
      {newarr.length > 0 ? (
        <div className="movie-body">
          {newarr.map(el => {
            return (
              <Movie
                title={el.title}
                img={el.img}
                desc={el.desc}
                rating={el.rating}
                updatehandle={() => updateData(el.id)}
                deletehandle={() => deleteData(el.id)}
              />
            );
          })}
        </div>
      ) : searchStr.length == 0 ? (
        <div>
            <div className="movie-body">
          {arr.map(el => {
            return (
              <Movie
                title={el.title}
                img={el.img}
                desc={el.desc}
                rating={el.rating}
                updatehandle={() => updateData(el.id)}
                deletehandle={() => deleteData(el.id)}
              />
            );
          })}
         
        </div>
        <div className="pageButtons">
            {pageArr.map(el => {
              return <button onClick={() => handlePage(el)}>{el}</button>;
            })}
          </div>
        </div>
        
      ) : (
        <div className="datano">
          <h2>No Movie Of such name</h2>
          <img
            src="https://media.giphy.com/media/6n6ThlsCKLiSfQnHGY/giphy.gif"
            id="nodata"
          />
        </div>
      )}
    </div>
  );
};