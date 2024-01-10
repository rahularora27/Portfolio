import React from 'react';
import { Link } from 'react-scroll';

const NAV_LINKS = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact?' },
];

const TopNav = () => {
  const commonClassName = 'cursor-pointer hover:text-custom-icon-hover hover:scale-110 transition duration-500';

  return (
    <nav className='fixed top-2 right-8 text-custom-icon' role="navigation">
      <ul className='flex flex-row items-center space-x-4 font-Arvo'>
        {NAV_LINKS.map((link) => (
          <li key={link.to} className={commonClassName}>
            <Link to={link.to} spy={true} smooth={true} offset={-250} duration={500}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
