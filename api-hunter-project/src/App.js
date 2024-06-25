import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Addmovie from './Components/Addmovie';
import Showmovie from './Components/Showmovie';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Addmovie/>} ></Route>
          <Route path='/moviesdata' element={<Showmovie/>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
