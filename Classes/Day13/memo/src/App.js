import logo from './logo.svg';
import './App.css';
import { Card } from './Card';
import MoCard from "./Card";

function App() {
  return (
    <div className="App">
      <Card image={"https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"} title={"memo😎"}/>
      {/* <MoCard userid={"1"} body={"(^人^)"}></MoCard> */}
    </div>
  );
}

export default App;
