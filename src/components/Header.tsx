import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  // Header social icons (slightly different from footer)
  const headerSocialIcons = [
    { src: "/vector-42.svg", alt: "Vector" },
    { src: "/vector-33.svg", alt: "Vector" },
    {
      type: "container",
      bgColor: "bg-black",
      content: { src: "/vector-44.svg", alt: "Vector" },
    },
    { src: "/instagram-logo-2016-1.svg", alt: "Instagram logo" },
    { src: "/vector-47.svg", alt: "Vector" },
  ];

  // Navigation links
  const navLinks = ["About me", "Portfolio", "Contact me", "Blog"];

  return (
    <header className="bg-white overflow-hidden  ">
      <div className="relative w-[1440px] h-[94px] bg-white shadow-[0px_7px_4px_#00000040]">
        <div className="absolute top-[26px] left-[38px] font-h2 font-[number:var(--h2-font-weight)] text-black text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] whitespace-nowrap [font-style:var(--h2-font-style)]">
          <Link to="/" className="hover:underline">
            Smith Zea
          </Link>
        </div>
        <nav className="inline-flex items-center gap-[45px] absolute top-[35px] left-[347px]">
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
        <div className="top-[30px] left-[1093px] inline-flex items-center gap-[25px] absolute">
          {headerSocialIcons.map((icon, index) =>
            icon.type === "container" ? (
              <div
                key={index}
                className="relative w-[39px] h-[39px] bg-black rounded-[19.5px]"
              >
                <img
                  className="absolute w-[23px] h-6 top-2 left-2"
                  alt={icon.content.alt}
                  src={icon.content.src}
                />
              </div>
            ) : (
              <Button key={index} variant="ghost" className="p-0 h-auto w-auto">
                <img
                  className="relative w-[39px] h-[39px]"
                  alt={icon.alt}
                  src={icon.src}
                />
              </Button>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
