import { IoIosMail } from 'react-icons/io';

const Contact = () => {

  const recipient = 'rahularora2715@gmail.com';
  const mailtoUrl = `mailto:${recipient}`;

  return (
    <div className="min-h-screen flex justify-center items-center text-custom-1">
      <div className="max-w-3xl text-center mx-auto">
        <p className="font-Madurai text-5xl">Get in Touch</p>
        <p className="text-lg mt-4 sm:text-xl">
          I'm actively seeking new opportunities, and my inbox is wide open! Whether you have a question or an exciting opportunity to share, I'll be thrilled to hear from you and will make every effort to respond promptly. Let's connect and explore the possibilities together!
        </p>
        <a href={mailtoUrl} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
          <IoIosMail className="text-custom-1 mt-5" size={26} />
        </a>
        <p className="mt-1 font-semibold text-xl">rahularora2715@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
