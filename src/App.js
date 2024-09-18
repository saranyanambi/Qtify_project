import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Hero from './components/Hero/Hero';
import CardComponent from './components/Card/Card';
import Section  from './components/Section/Section';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar searchData={[]}/>
        <Hero/>
        <Section link='https://qtify-backend-labs.crio.do/albums/top' title="Top Albums"/>
        <Section link='https://qtify-backend-labs.crio.do/albums/new' title="New Albums"/>
      </Router>
    </div>
  );
}

export default App;
