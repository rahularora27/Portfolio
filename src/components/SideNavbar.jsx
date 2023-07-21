import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SideNavbar = () => {
  return (
    <div className="fixed bottom-0 left-8 flex flex-col items-center">
      <a
        href="https://github.com/rahularora27"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="w-6 h-6 text-custom-icon hover:text-custom-icon-hover transition duration-300"/>
      </a>

      <a
        href="https://www.linkedin.com/in/rahularora2715"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="w-6 h-6 text-custom-icon hover:text-custom-icon-hover transition duration-300"
        />
      </a>
      
      <a
        href="https://twitter.com/RahulArora2715"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className="w-6 h-6 text-custom-icon hover:text-custom-icon-hover transition duration-300"
        />
      </a>
      <div className="w-px h-24 bg-custom-icon"></div>
    </div>
  );
};

export default SideNavbar;
