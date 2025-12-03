import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      {loading && <LoadingScreen onLoadingComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
        </>
      )}
    </div>
  );
}

export default App;