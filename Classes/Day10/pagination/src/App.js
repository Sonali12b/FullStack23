import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Card } from "./components/Card";
function App() {
  const [arr,setArr]=useState([]);
  // const [pageArr,setNewArr]=useState([1,2,3,4,5,6,7,8,9,10]);
  const [page,setPage]=useState(1);
  const [wholeArr,setWholeArr]=useState([]);
  const pageArr=[]
  let i =1;
  while (i<= wholeArr.length /10) {
    pageArr.push(i);
    i++;
  }
  console.log(pageArr);



  const getData =async()=>{
    await fetch(`https://jsonplaceholder.typicode.com/posts`,{
      method:"GET"
    }).then((res)=>res.json())
    .then((data)=>{
      setWholeArr(data);
      const end= page*20;
      const start=page-1;
      const newData=data.slice(start*20,end);
      setArr(newData)
    })
  }

    const handlePage=(el)=>{
    setPage(el);
  }

    useEffect(()=>{
    getData()
  },[page])


  
  // const getData= async ()=>{
  //   await fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=20`,{
  //     method:"GET"
  //   }).then((res)=>res.json())
  //   .then((data)=>{
  //     setArr(data.data)
  //   })
  // }
  // const handlePage=(el)=>{
  //   setPage(el);
  // }
  // useEffect(()=>{
  //   getData()
  // },[page])


  return (
    <div className="App">
      {
        arr.length >0 
        ?
        <div>
          {arr.map((el) => {
            return (
              // <Card
              // passenger={el.name}
              // name={el.airline[0].name}
              // country={el.airline[0].country}
              // slogan={el.airline[0].slogan}
              // head_quaters={el.airline[0].head_quaters}
              // />
              <Card userid={el.userId} title={el.title} body={el.body}></Card>
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
