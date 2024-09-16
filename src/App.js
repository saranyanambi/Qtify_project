import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar searchData={[]}/>
        <Hero/>
      </Router>
    </div>
  );
}

export default App;
