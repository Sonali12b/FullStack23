import logo from "./logo.svg";
import "./App.css";
import { Card } from "./components/card";
import { useEffect, useState } from "react";
import './components/Card.css'

function App() {
  const [arr, setArr] = useState([]);

  /*getData*/
  const getData = async () => {
    await fetch("http://localhost:3001/users", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        // data = data.slice(0, 10);
        console.log(data);
        setArr(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  /*Handle Post*/
  const handlePost= async()=>{
    const obj={
      id:"11",
      title:"Your Name",
      url:"https://e0.pxfuel.com/wallpapers/972/674/desktop-wallpaper-your-name-kimi-no-na-wa-names-member-and-cosplay-costumes-anime-your-name-live-thumbnail.jpg",
      thumbnailUrl:"https://i.pinimg.com/originals/51/22/40/512240630643df5ae0a4e2d240974c9f.png"
    }
    await fetch("http://localhost:3001/users",{    
    method:"POST",
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    res.json();
    getData();
  })
  }

/*handleput*/
const handlePut= async(id)=>{
  await fetch("http://localhost:3001/users/")
}  

  return (
    <div className="App">
      <h2>useState & useEffect</h2>
      <button onClick={handlePost} className="btn">Add New Data</button>

      {arr.map(el => {
        return (

          <Card title={el.title} url={el.url} thumbnailUrl={el.thumbnailUrl} onclick />
        );
      })}
    </div>
  );
}

export default App;
