import React from 'react'
import rahul from '../assets/rahul.jpg'

const About = () => {
  return (
    <div className='h-screen md:flex items-center justify-evenly'>
      <img className='h-64 w-64 mx-auto md:mx-0' src={rahul} />
      <div className='text-custom-icon-hover max-w-md lg:max-w-2xl'>
        Hi there! <br/>
        I'm Rahul Arora, a 3rd-year BTech CSE student at Manipal University Jaipur, passionate about building innovative and user-friendly web applications. I'm constantly learning and exploring new technologies, and I'm excited to share my journey and creations with you.
        <br/>
        Technologies I'm familiar with: <br/>
        JavaScript
        React
        MongoDB
        MySQL
        Node.js
        Express.js
        <br/>
        This portfolio showcases some of my projects and experiences. I'd love to hear your thoughts, so feel free to browse around and connect with me!
        <br/>
        Beyond the code:
        <br/>
        When I'm not coding, you might find me:
        Mastering a new game (currently obsessed with [insert your favorite game]).
        Catching up with friends and family.
        Playing Cricket. (Love it)
        <br/>
        Ready to collaborate?
        I'm always looking for opportunities to learn and grow. If you have a project in mind or simply want to chat about tech, don't hesitate to reach out!
      </div>
    </div>
  )
}

export default About