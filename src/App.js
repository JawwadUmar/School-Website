import './App.css';
import About from './components/About';
import Announcements from './components/Announcements';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Announcements/>
    <About/>
    <Contact/>

    </>
  );
}

export default App;
