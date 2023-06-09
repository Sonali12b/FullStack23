import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Card } from "./components/Card";
function App() {
  const [arr,setArr]=useState([]);
  const [pageArr,setNewArr]=useState([1,2,3,4,5,6,7,8,9,10]);
  const [page,setPage]=useState(1);
  
  const getData= async ()=>{
    await fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=20`,{
      method:"GET"
    }).then((res)=>res.json())
    .then((data)=>{
      setArr(data.data)
    })
  }
  const handlePage=(el)=>{
    setPage(el);
  }
  useEffect(()=>{
    getData()
  },[page])


  return (
    <div className="App">
      {
        arr.length >0 
        ?
        <div>
          {arr.map((el) => {
            return (
              <Card
              passenger={el.name}
              name={el.airline[0].name}
              country={el.airline[0].country}
              slogan={el.airline[0].slogan}
              head_quaters={el.airline[0].head_quaters}
              />
            );
          })}
        </div>
        :
        <h1>No data found</h1>
      }
      { pageArr.map((el)=>{
        return <button onClick={()=>handlePage(el)}>{el}</button>
      })}
    </div>
  );
}

export default App;
