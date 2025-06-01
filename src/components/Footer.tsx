import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircleMore,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 sm:py-10 md:py-12">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Let's Connect</h2>
        <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8">
          Get in touch if you have a new project or just to say hi! :)
        </p>

        <div className="flex flex-row justify-center space-x-6">
          {/* <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:opacity-75 transition-opacity"
          >
            <Facebook size={24} />
          </a> */}
          <a
            href="https://api.whatsapp.com/send?phone=610401196617"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:opacity-75 transition-opacity"
          >
            <MessageCircleMore size={24} />
          </a>
          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:opacity-75 transition-opacity"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:opacity-75 transition-opacity"
          >
            <Instagram size={24} />
          </a> */}
          <a
            href="https://www.linkedin.com/in/smithzea/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:opacity-75 transition-opacity"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>

    // <footer className="w-full h-[457px] mt-10 bg-white shadow-[inset_0px_4px_4px_#00000040] flex flex-col items-center justify-center">
    //   <div className="text-center">
    //     <h2 className="font-['Roboto',Helvetica] font-medium text-black text-3xl mb-6">
    //       Let&apos;s Connect
    //     </h2>
    //     <p className="font-['Roboto',Helvetica] font-normal text-black text-[25px] mb-10">
    //       Get in touch if you have a new project or just to say hi! :)
    //     </p>
    //     <img
    //       className="w-[353px] h-[39px]"
    //       alt="Frame"
    //       src="/frame-2.svg"
    //     />
    //   </div>
    // </footer>
  );
};

export default Footer;
