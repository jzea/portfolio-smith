import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const GdSydney = (): JSX.Element => {
  // Portfolio images data
  const portfolioImages = [
    { src: "/logo-1080.png", alt: "Logo" },
    { src: "/mockup-business-card.png", alt: "Mockup business card" },
    {
      src: "/81941746-450236269216069-3463896596012335104-n.png",
      alt: "Element",
    },
    {
      src: "/86394231-481775586062137-8416117609128263680-n.png",
      alt: "Element",
    },
  ];

  // Video cards data
  const videoCards = Array(4).fill({ title: "VIDEO" });

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] relative">
        {/* Hero Image */}
        <img
          className="w-full h-[423px] object-cover"
          alt="Element"
          src="/117833779-609757703263924-2886242693410465874-n.png"
        />

        {/* Portfolio Images Row */}
        <div className="flex justify-center gap-[39px] mt-[105px]">
          {portfolioImages.map((image, index) => (
            <img
              key={index}
              className="w-[258px] h-[258px] object-cover"
              alt={image.alt}
              src={image.src}
            />
          ))}
        </div>

        {/* Video Section */}
        <div className="w-full h-[415px] mt-[105px] bg-black shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
          <div className="text-[40px] font-medium font-['Poppins',Helvetica] text-white">
            VIDEO
          </div>
        </div>

        {/* Video Cards Row */}
        <div className="flex justify-center gap-[47px] mt-[39px]">
          {videoCards.map((card, index) => (
            <Card
              key={index}
              className="w-[250px] h-[250px] bg-black rounded-[20px] shadow-[0px_4px_4px_#00000040] border-none"
            >
              <CardContent className="flex items-center justify-center h-full p-0">
                <div className="font-['Poppins',Helvetica] font-medium text-white text-[25px]">
                  {card.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
