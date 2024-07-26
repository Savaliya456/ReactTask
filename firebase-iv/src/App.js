import AddData from './AddData';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Display from './Display';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<AddData/>}></Route>
          <Route path='/display' element={<Display/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
