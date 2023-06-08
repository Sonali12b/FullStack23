import logo from "./logo.svg";
import "./App.css";
import { Card } from "./components/card";
import { useEffect, useState } from "react";

function App() {
  const [arr, setArr] = useState([]);
  const getData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/photos", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        data = data.slice(0, 10);
        console.log(data);
        setArr(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h2>useState & useEffect</h2>
      {arr.map(el => {
        return (
          <Card title={el.title} url={el.url} thumbnailUrl={el.thumbnailUrl} />
        );
      })}
    </div>
  );
}

export default App;
