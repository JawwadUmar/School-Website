import { useState } from 'react';
import './App.css';
import About from './components/About';
import Announcements from './components/Announcements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {

  const [isOpen, setisOpen] = useState(false);

  return (
    <>
    <Navbar isOpen = {isOpen} setisOpen = {()=>{setisOpen(!isOpen)}}/>
    <div onClick={()=>{
      if(isOpen){
        setisOpen(false)
      }
    }
    }>
    <Hero/>
    <Announcements/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
    

    </>
  );
}

export default App;
