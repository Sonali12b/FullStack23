import './App.css';
import './components/Card.css'
import { Navbar } from './components/Navbar';
import { Card } from "./components/Card";
import { Body } from './components/Body';
function App() {

  return (
    <div className='main'>
    <Navbar/>
    <Body></Body>
    </div>
  );
}

export default App;
