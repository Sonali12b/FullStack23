import './App.css';
import { Body } from "./components/Body";
import { SearchProvider } from './components/searchContext';

function App() {
  return (
    <SearchProvider>
      <Body></Body>
    </SearchProvider>
  );
}

export default App;
