import React, { useState } from 'react';
import { IoIosMail } from 'react-icons/io';

const Contact = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="min-h-screen flex justify-center items-center text-custom-icon-hover">
      <div className="text-center max-w-2xl">
        <p className="font-Madurai text-5xl">Get in Touch</p>
        <p className="text-lg mt-4">
          I'm actively seeking new opportunities, and my inbox is wide open! Whether you have a question or an exciting
          opportunity to share, I'll be thrilled to hear from you and will make every effort to respond promptly. Let's
          connect and explore the possibilities together!
        </p>

        <button
          className="text-custom-icon-hover font-bold text-xl"
          onClick={toggleTextVisibility}
        >
          {isTextVisible ? 'rahularora2715@gmail.com' : <IoIosMail size={30} />}
        </button>
      </div>
    </div>
  );
};

export default Contact;
