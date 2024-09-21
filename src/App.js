import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Hero from './components/Hero/Hero';
import CardComponent from './components/Card/Card';
import Section  from './components/Section/Section';
import Songs from './components/Songs/Songs';
import Faq from './components/Faq/Faq'
import AudioPlayer from './components/Playsong/Playsong';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar searchData={[]}/>
        <Hero/>
        <Section link='https://qtify-backend-labs.crio.do/albums/top' title="Top Albums"/>
        <Section link='https://qtify-backend-labs.crio.do/albums/new' title="New Albums"/>
        <Songs/>
        <Faq/>
      </Router>
    </div>
  );
}

export default App;
