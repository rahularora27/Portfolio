import React from 'react';
import Links from '../components/Links';
import TopNav from '../components/TopNav';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Home() {
  return (
    <>
    <TopNav />
    <Links />

    <section id='hero'>
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

export default Home
