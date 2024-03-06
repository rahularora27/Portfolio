import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Links = () => {
  return (
    <div className="hidden md:fixed md:bottom-0 md:left-8 md:flex md:flex-col md:items-center">
      <a
        href="https://github.com/rahularora27"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 hover:-translate-y-0.5 transform transition duration-300"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="w-6 h-6 text-custom-icon hover:text-custom-icon-hover transition duration-300"/>
      </a>

      <a
        href="https://www.linkedin.com/in/rahularora2715"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 hover:-translate-y-0.5 transform transition duration-300"
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
        className="mb-4 hover:-translate-y-0.5 transform transition duration-300"
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

export default Links;
