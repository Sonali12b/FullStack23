import logo from './logo.svg';
import './App.css';
import { SearchProvider } from './components/searchContext';
import Homepage from './components/Homepage'
function App() {
  return (
    <SearchProvider>
      <Homepage/>
    </SearchProvider>
  );
}

export default App;
