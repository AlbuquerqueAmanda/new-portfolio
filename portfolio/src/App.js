import React from 'react';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
    </LanguageProvider>
  );
}

export default App;
