import { React, useState } from 'react';
import { Link } from 'react-scroll';
import { BiMenuAltRight } from "react-icons/bi";

const NAV_LINKS = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact?' },
];

const TopNav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const commonClassName = 'text-lg font-semibold cursor-pointer text-custom-icon hover:text-custom-icon-hover hover:scale-110 transition duration-500';

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap w-full text-md py-4 fixed">
      <nav className='max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-end' role="navigation">
        <div className="md:hidden md:order-3 flex items-center gap-x-2">
          <button
            type="button"
            className="p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg text-custom-icon hover:text-custom-icon-hover shadow-md"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <BiMenuAltRight
              className={`hs-collapse-open:${isMenuOpen ? 'block' : 'hidden'} flex-shrink-0 size-4`}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </button>
        </div>
        <div
          id="navbar-alignment"
          className={`hs-collapse ${isMenuOpen ? 'block' : 'hidden'} overflow-hidden basis-full grow md:grow-0 md:basis-auto md:block md:order-2`}
        >
          <div className="md:mt-0 md:ps-5 mx-2">
            <ul className='md:flex items-center fixed right-4 md:space-x-4 font-Arvo'>
              {NAV_LINKS.map((link) => (
                <li key={link.to} className={commonClassName}>
                  <Link to={link.to} spy={true} smooth={true} duration={500}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopNav;