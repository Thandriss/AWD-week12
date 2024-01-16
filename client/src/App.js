import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Data from './component/Data'
import Main from './component/Main';

function App() {
  
  
  return (
    <Router>
      <h1>Books</h1>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/book/:id' element={<Data/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
