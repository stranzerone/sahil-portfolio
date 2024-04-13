import React from 'react';
import About from './Pages/MainPage';
import ProjectCard from './Components/ProjectCard';
import Navbar  from "./Components/Navbar"
import Skills from './Components/Skills/Skills';
import ExtraSkills from './Components/Skills/ExtraSkills';
import Footer from './Pages/Footer';
function App() {
  return (
 <div>
 <Navbar />
    <About />
    <Skills />
    <ExtraSkills />
  <ProjectCard />
  <Footer />
 </div>
  );
}

export default App;
