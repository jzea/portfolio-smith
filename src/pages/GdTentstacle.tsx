import React from "react";
import { Card, CardContent } from "../components/ui/card";

export const GdTentstacle = (): JSX.Element => {
  // Portfolio images data
  const portfolioImages = [
    { src: "/rectangle-377.png", alt: "Rectangle" },
    { src: "/lift.png", alt: "Lift" },
    { src: "/spread.png", alt: "Spread" },
    { src: "/stretch.png", alt: "Stretch" },
    { src: "/color-logo.png", alt: "Color logo", bgImage: "/rectangle-41.png" },
    { src: "/tentstacle.png", alt: "Tentstacle" },
    { src: "/tentstacle1.png", alt: "Tentstacle" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] relative">
        {/* Hero Banner */}
        <img
          className="w-full h-[423px] object-cover"
          alt="Element"
          src="/streee.png"
        />

        {/* Portfolio Grid */}
        <div className="flex flex-wrap justify-center gap-[39px] mt-[105px] px-[146px]">
          {portfolioImages.slice(0, 4).map((image, index) => (
            <Card
              key={index}
              className="w-[258px] h-[258px] border-none rounded-none shadow-none"
            >
              <CardContent className="p-0">
                <img
                  className="w-full h-full object-cover"
                  alt={image.alt}
                  src={image.src}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-[39px] mt-[31px] px-[146px]">
          {portfolioImages.slice(4).map((image, index) => (
            <Card
              key={index}
              className="w-[258px] h-[258px] border-none rounded-none shadow-none"
            >
              <CardContent className="p-0">
                {image.bgImage ? (
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${image.bgImage})` }}
                  >
                    <img
                      className="w-full h-full object-cover"
                      alt={image.alt}
                      src={image.src}
                    />
                  </div>
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    alt={image.alt}
                    src={image.src}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
