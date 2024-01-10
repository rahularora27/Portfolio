import React from 'react';
import Hero from './components/Hero';
import Links from './components/Links';
import TopNav from './components/TopNav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ClassNames } from '@emotion/react';

function App() {
  return (
    <>
    <TopNav />
    <Links />

    <section id='home'>
      <Hero />
    </section>
    <section id='about'>
      <About />
    </section>
    <section id='projects'>
      <Projects />
    </section>
    <section id='contact'>
      <Contact />
    </section>
    </>
  );
}

export default App
