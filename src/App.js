
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Dropdown from './component/Dropdown';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Project from './component/Project';
import Technology from './component/Technology';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <About />
       <Technology />
       <Project />
       <Contact />
    </div>
  );
}

export default App;
