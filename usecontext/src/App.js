import logo from './logo.svg';
import './App.css';
import ThemeComponent from './ThemeComponent';
import ToggleTheme from './ToggleTheme';
import ThemeProvider from './ThemeProvider';

function App() {
  return (
    <div className="App">
      <ThemeComponent/>
      <ToggleTheme/>
      <ThemeProvider/>
    </div>
  );
}

export default App;

