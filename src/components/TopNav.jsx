import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { Transition } from '@headlessui/react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const commonClassName = 'text-lg font-Arvo font-semibold cursor-pointer text-custom-1 hover:text-custom-2 hover:scale-110 transition duration-500';
  const commonClassName2 = 'block text-lg font-Arvo font-semibold cursor-pointer text-custom-1';

  return (
    <nav className="fixed top-0 w-full bg-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="text-white text-2xl"></div>
          </div>
          <div className="hidden md:block">
           <div className="ml-10 flex items-baseline space-x-4">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className={commonClassName}
              >
                Home
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className={commonClassName}
              >
                About
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className={commonClassName}
              >
                Projects
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className={commonClassName}
              >
                Contact?
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="text-custom-1 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <BiMenuAltRight className="block h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className={commonClassName2}
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className={commonClassName2}
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className={commonClassName2}
                onClick={handleLinkClick}
              >
                Projects
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                className={commonClassName2}
                onClick={handleLinkClick}
              >
                Contact?
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
