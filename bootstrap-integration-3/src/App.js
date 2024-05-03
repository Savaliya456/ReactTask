import logo from './logo.svg';
import './App.css';
import Topbar from './Component/Topbar';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Icon from './Component/Icon';
import About from './Component/About';
import Clients from './Component/Clients';
import Whyus from './Component/Whyus';
import Services from './Component/Services';
import Cta from './Component/Cta';
import Portfolio from './Component/Portfolio';
import Team from './Component/Team';
import Pricing from './Component/Pricing';
import Faq from './Component/Faq';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Header/>
      <Hero/>
      <Icon/>
      <About/>
      <Clients/>
      <Whyus/>
      <Services/>
      <Cta/>
      <Portfolio/>
      <Team/>
      <Pricing/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
