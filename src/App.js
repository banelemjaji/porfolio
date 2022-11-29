import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About';
import Sovtech from './components/Sovtech';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Sovtech/>
      <Footer/>
    </div>
  );
}

export default App;
