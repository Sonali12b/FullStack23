
import '../App.css';
import { useContext, useEffect, useState } from 'react';
import { Card } from "./Card";
import { Navbar } from './Navbar';
import SearchContext from './searchContext';
function Homepage() {
  const [arr,setArr]=useState([]);
  const [search]=useContext(SearchContext);
  const [page,setPage]=useState(1);
  const [wholeArr,setWholeArr]=useState([]);
  const [newarr, setnewArr] = useState([]);
  const [searchStr, getSearchStr] = useState("");
  useEffect(() => {
    getSearchedData();
  }, [search]);

    /*searching*/
    const getSearchedData = () => {
        const newData = arr.filter(item => item.title.includes(search));
        console.log(newData);
        setnewArr(newData);
      };
     
      console.log(newarr);

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
      const end= page*10;
      const start=page-1;
      const newData=data.slice(start*10,end);
      setArr(newData)
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
        <Navbar/>
      {
        arr.length >0 
        ?
        <div>
          {arr.map((el) => {
            return (
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

export default Homepage;
