import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Whyus from './Components/Why-us';
import Menu from './Components/Menu';
import Specials from './Components/Specials';
import Events from './Components/Events';
import Book from './Components/Book';
import Gallery from './Components/Gallery';
import Chefs from './Components/Chefs';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Topbar/>
      <Header/>
      <Hero/>
      <About/>
      <Whyus/>
      <Menu/>
      <Specials/>
      <Events/>
      <Book/>
      <Gallery/>
      <Chefs/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;