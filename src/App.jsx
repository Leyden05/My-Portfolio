import { useState } from 'react';
import Sidenav from './components/sidenav';
import Main from './components/Main';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Aboutme />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
