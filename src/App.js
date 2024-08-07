import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Landing from './Pages/Landing';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import Certifications from './Pages/Certifications';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
