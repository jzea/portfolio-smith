import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  // Header social icons (slightly different from footer)
  const headerSocialIcons = [
    { src: "/vector-42.svg", alt: "Facebook", href: "https://facebook.com" },
    { src: "/vector-33.svg", alt: "Twitter", href: "https://twitter.com" },
    {
      type: "container",
      bgColor: "bg-black",
      content: { src: "/vector-44.svg", alt: "WhatsApp" },
      href: "https://api.whatsapp.com",
    },
    { src: "/instagram-logo-2016-1.svg", alt: "Instagram", href: "https://instagram.com" },
    { src: "/vector-47.svg", alt: "LinkedIn", href: "https://www.linkedin.com/in/smithzea/" },
  ];

  // Navigation links
  const navLinks = ["About me", "Portfolio", "Contact me", "Blog"];

  return (
    <header className="bg-white w-full">
      <div className="relative w-full h-[94px] bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="font-h2 font-[number:var(--h2-font-weight)] text-black text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] whitespace-nowrap [font-style:var(--h2-font-style)]">
            <Link to="/" className="hover:underline">
              Smith Zea
            </Link>
          </div>
          <nav className="flex items-center gap-[45px]">
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
          <div className="flex items-center gap-[25px]">
            {headerSocialIcons.map((icon, index) =>
              icon.type === "container" ? (
                <a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
                >
                  <div
                    className="relative w-[39px] h-[39px] bg-black rounded-[19.5px]"
                  >
                    <img
                      className="absolute w-[23px] h-6 top-2 left-2"
                      alt={icon.content.alt}
                      src={icon.content.src}
                    />
                  </div>
                </a>
              ) : (
                <a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
                >
                  <Button variant="ghost" className="p-0 h-auto w-auto">
                    <img
                      className="relative w-[39px] h-[39px]"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </Button>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
