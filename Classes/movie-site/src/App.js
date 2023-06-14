import { Allroutes } from './Allroutes';
import './App.css';
import { Body } from "./components/Body";
import { SearchProvider } from './components/searchContext';

function App() {
  return (
    <Allroutes/>
    // <SearchProvider>
    //   <Body></Body>
    // </SearchProvider>
  );
}

export default App;
