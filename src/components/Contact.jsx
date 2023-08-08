import React from 'react';
import { ImLocation2 } from 'react-icons/im';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoIosMail } from 'react-icons/io';

const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center text-white pt-32">
      <div className="text-center max-w-2xl">
        <p className="font-Madurai text-5xl">Get in Touch</p>
        <p className="text-lg mt-4">
          I'm actively seeking new opportunities, and my inbox is wide open! Whether you have a question or an exciting
          opportunity to share, I'll be thrilled to hear from you and will make every effort to respond promptly. Let's
          connect and explore the possibilities together!
        </p>
        <div className="flex mt-10 items-center justify-between">
          <div className='text-3xl ml-8'>
          <ContactInfo icon={<ImLocation2 />} text="Chandigarh, India" />
          <ContactInfo icon={<BiSolidPhoneCall />} text="+91 9878736065" />
          <ContactInfo icon={<IoIosMail />} text="rahularora2715@gmail.com" />
          </div>
          <button className='mr-16 mt-2.5 py-3 px-5 text-2xl bg-slate-500 text-white'>Say Hello</button>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, text }) => {
  return (
    <p className="flex items-center w-80 border mt-2 border-gray-400 p-4">
      {icon}
      <span className="text-lg ml-2">{text}</span>
    </p>
  );
};

export default Contact;
