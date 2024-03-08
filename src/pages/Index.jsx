import React from 'react';
import Links from '../components/Links';
import TopNav from '../components/TopNav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Index() {
  return (
    <>
    <TopNav />
    <Links />

    <section id='home'>
      <Home />
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

export default Index
