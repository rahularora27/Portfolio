import React from 'react';
import { Link } from 'react-scroll';

const TopNav = () => {
  return (
    <div className='fixed top-2 right-8 text-custom-icon'>
        <nav>
            <ul className='flex flex-row items-center space-x-4 font-Arvo'>
                <li className='cursor-pointer hover:text-custom-icon-hover hover:scale-110 transition duration-500'><Link to='home' spy={true} smooth={true} offset={-250} duration={500}>Home</Link></li>
                <li className='cursor-pointer hover:text-custom-icon-hover hover:scale-110 transition duration-500'><Link to='about' spy={true} smooth={true} duration={500}>About</Link></li>
                <li className='cursor-pointer hover:text-custom-icon-hover hover:scale-110 transition duration-500'><Link to='projects' spy={true} smooth={true} duration={500}>Projects</Link></li>
                <li className='cursor-pointer hover:text-custom-icon-hover hover:scale-110 transition duration-500'><Link to='contact' spy={true} smooth={true} duration={500}>Contact?</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default TopNav