import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Header social icons (slightly different from footer)
  const headerSocialIcons = [
    //{ src: "/vector-42.svg", alt: "Facebook", href: "https://facebook.com" },
    { src: "/vector-33.svg", alt: "Whatsapp", href: "https://api.whatsapp.com/send?phone=610401196617" },
    {
      type: "container",
      bgColor: "bg-black",
      content: { src: "/vector-44.svg", alt: "Twitter" },
      href: "https://twitter.com",
    },
    //{ src: "/instagram-logo-2016-1.svg", alt: "Instagram", href: "https://instagram.com" },
    { src: "/vector-47.svg", alt: "LinkedIn", href: "https://www.linkedin.com/in/smithzea/" },
  ];

  // Navigation links
  const navLinks = ["About me", "Portfolio", "Contact me", "Blog"];

  return (
    <header className="bg-white w-full">
      <div className="relative w-full h-[94px] bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.1)] z-20">
        <div className="container mx-auto px-4 h-full flex items-center justify-between lg:grid lg:grid-cols-3 lg:items-center">
          {/* Hamburger icon for mobile */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 mr-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <span className={`block w-7 h-1 bg-black rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-1 bg-black rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-1 bg-black rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          {/* Logo left (desktop), centered (mobile/tablet) */}
          <div className="flex-1 flex justify-center lg:justify-start lg:col-span-1">
            <div className="font-h2 font-[number:var(--h2-font-weight)] text-black text-xl md:text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] whitespace-nowrap [font-style:var(--h2-font-style)]">
              <Link to="/" className="hover:underline">
                Smith Zea
              </Link>
            </div>
          </div>
          {/* Desktop nav centered */}
          <nav className="hidden lg:flex items-center gap-[45px] justify-center lg:col-span-1">
            {navLinks.map((link, index) => {
              let to = "/";
              if (link === "About me") to = "/about";
              else if (link === "Portfolio") to = "/portfolio";
              else if (link === "Contact me") to = "/contact";
              else if (link === "Blog") to = "/blog";
              return (
                <Button key={index} variant="link" className="p-0 h-auto">
                  <Link to={to}>
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-black text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
                      {link}
                    </span>
                  </Link>
                </Button>
              );
            })}
          </nav>
          {/* Social icons right (desktop), right (mobile/tablet) */}
          <div className="flex items-center gap-2 md:gap-4 ml-2 lg:justify-end lg:col-span-1">
            {headerSocialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-transparent"
              >
                {icon.type === "container" ? (
                  <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-black rounded-full">
                    <img
                      className="w-4 h-4 md:w-6 md:h-6"
                      alt={icon.content.alt}
                      src={icon.content.src}
                    />
                  </div>
                ) : (
                  <img
                    className="w-6 h-6 md:w-8 md:h-8"
                    alt={icon.alt}
                    src={icon.src}
                  />
                )}
              </a>
            ))}
          </div>
        </div>
        {/* Mobile slide-in menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
        >
          <div className="flex flex-col h-full p-6">
            <button
              className="self-end mb-8 focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="block w-8 h-1 bg-black rounded rotate-45 translate-y-2"></span>
              <span className="block w-8 h-1 bg-black rounded -rotate-45 -translate-y-2 -mt-2"></span>
            </button>
            <nav className="flex flex-col gap-8 mt-8">
              {navLinks.map((link, index) => {
                let to = "/";
                if (link === "About me") to = "/about";
                else if (link === "Portfolio") to = "/portfolio";
                else if (link === "Contact me") to = "/contact";
                else if (link === "Blog") to = "/blog";
                return (
                  <Link
                    key={index}
                    to={to}
                    className="text-black text-2xl font-semibold hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        {/* Overlay when menu is open */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
