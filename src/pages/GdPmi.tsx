import React from "react";
import { Card, CardContent } from "../components/ui/card";

export const GdPmi = (): JSX.Element => {
  // Social media icons data

  // Navigation links data
  const navLinks = ["About me", "Portfolio", "Contact me", "Blog"];

  // Video cards data
  const videoCards = [
    { id: 1, top: "1719px", left: "150px" },
    { id: 2, top: "1719px", left: "447px" },
    { id: 3, top: "1719px", left: "744px" },
    { id: 4, top: "1719px", left: "1041px" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[2783px] relative">
        {/* Hero banner image */}
        <img
          className="absolute w-[1440px] h-[423px] top-[0px] left-0 object-cover"
          alt="Hero Banner"
          src="/barra.png"
        />

        {/* Video section with black background */}
        <div className="absolute w-[1440px] h-[415px] top-[1265px] left-0 bg-black shadow-[0px_4px_4px_#00000040]">
          <div className="top-[177px] left-[660px] text-[40px] absolute [font-family:'Poppins',Helvetica] font-medium text-white tracking-[0] leading-[normal]">
            VIDEO
          </div>
        </div>

        {/* Portfolio images */}
        <img
          className="absolute w-[258px] h-[258px] top-[929px] left-[146px]"
          alt="Portfolio Item 1"
          src="/rectangle-37777.svg"
        />

        <img
          className="absolute w-[258px] h-[258px] top-[929px] left-[443px] object-cover"
          alt="Portfolio Item 2"
          src="/rectangle-388.png"
        />

        {/* Video cards */}
        {videoCards.map((card) => (
          <Card
            key={card.id}
            className="absolute w-[250px] h-[250px] top-[1719px] left-[150px] bg-black rounded-[20px] shadow-[0px_4px_4px_#00000040]"
            style={{ top: card.top, left: card.left }}
          >
            <CardContent className="p-0 flex items-center justify-center h-full">
              <div className="[font-family:'Poppins',Helvetica] font-medium text-white text-[25px] tracking-[0] leading-[normal]">
                VIDEO
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Web Design section */}
        <div className="absolute top-[618px] left-[150px] font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
          Web Design
        </div>

        <div className="absolute w-[1140px] h-[188px] top-[683px] left-[150px]">
          <div className="absolute top-[135px] left-0 font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
            Work
          </div>

          <div className="absolute w-[1140px] top-0 left-0 font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
            I have been designing the cover page of the website, and also doing
            small designs for different meetings.
          </div>
        </div>
      </div>
    </div>
  );
};
