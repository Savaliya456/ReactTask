import logo from './logo.svg';
import './App.css';
import TopBar from './Components/TopBar';
import Header from './Components/Header';
import Section01 from './Components/Section01';
import Section02 from './Components/Section02';
import Section03 from './Components/Section03';
import Section04 from './Components/Section04';
import Section05 from './Components/Section05';
import Section06 from './Components/Section06';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Header/>
      <Section01/>
      <Section02/>
      <Section03/>
      <Section04/>
      <Section05/>
      <Section06/>
      <Footer/>
    </div>
  );
}

export default App;
