import React from "react";
import { Card, CardContent } from "../components/ui/card";

export const GdSmitocap = (): JSX.Element => {
  // Video thumbnails data
  const videoThumbnails = [
    { id: 1, src: "/maxresdefault--1-.png", alt: "Maxresdefault" },
    { id: 2, src: "/maxresdefault--2-.png", alt: "Maxresdefault" },
    { id: 3, src: "/maxresdefault--3-.png", alt: "Maxresdefault" },
    { id: 4, src: "/maxresdefault--4-.png", alt: "Maxresdefault" },
    { id: 5, src: "/maxresdefault--5-.png", alt: "Maxresdefault" },
    { id: 6, src: "/maxresdefault--6-.png", alt: "Maxresdefault" },
    { id: 7, src: "/maxresdefault--7-.png", alt: "Maxresdefault" },
    { id: 8, src: "/maxresdefault--8-.png", alt: "Maxresdefault" },
    { id: 9, src: "/maxresdefault--9-.png", alt: "Maxresdefault" },
    { id: 10, src: "/maxresdefault--10-.png", alt: "Maxresdefault" },
    { id: 11, src: "/maxresdefault--11-.png", alt: "Maxresdefault" },
    { id: 12, src: "/maxresdefault--12-.png", alt: "Maxresdefault" },
    { id: 13, src: "/maxresdefault--13-.png", alt: "Maxresdefault" },
    { id: 14, src: "/maxresdefault--14-.png", alt: "Maxresdefault" },
    { id: 15, src: "/maxresdefault--15-.png", alt: "Maxresdefault" },
    { id: 16, src: "/maxresdefault--16-.png", alt: "Maxresdefault" },
    { id: 17, src: "/maxresdefault.png", alt: "Maxresdefault" },
  ];

  // Navigation menu items
  const navItems = [
    { id: 1, label: "About me" },
    { id: 2, label: "Portfolio" },
    { id: 3, label: "Contact me" },
    { id: 4, label: "Blog" },
  ];

  // Social media icons
  const socialIcons = [
    { id: 1, src: "/vector-1.svg", alt: "Vector" },
    { id: 2, src: "/vector.svg", alt: "Vector" },
    { id: 3, src: "/vector-3.svg", alt: "Vector", hasBackground: true },
    { id: 4, src: "/instagram-logo-2016-1.svg", alt: "Instagram logo" },
    { id: 5, src: "/vector-2.svg", alt: "Vector" },
  ];

  // Video cards data
  const videoCards = Array(8).fill({ label: "VIDEO" });

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[3756px] relative">
        {/* Banner Image */}
        <img
          className="absolute w-[1440px] h-[423px] top-[0px] left-0"
          alt="Element"
          src="/smitocapbarra.png"
        />

        {/* Video Thumbnails Grid */}
        <div className="absolute top-[500px] left-[146px] w-[1148px]">
          <div className="grid grid-cols-4 gap-10">
            {videoThumbnails.slice(0, 16).map((thumbnail) => (
              <div key={thumbnail.id} className="relative w-[258px] h-[258px]">
                <img
                  className="w-full h-full object-cover"
                  alt={thumbnail.alt}
                  src={thumbnail.src}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Last Video Thumbnail */}
        <div className="absolute w-[258px] h-[258px] top-[1778px] left-[146px]">
          <img
            className="w-full h-full object-cover"
            alt="Maxresdefault"
            src="/maxresdefault.png"
          />
        </div>

        {/* Black Video Section */}
        <div className="absolute w-[1440px] h-[415px] top-[2141px] left-0 bg-black shadow-[0px_4px_4px_#00000040]">
          <div className="top-[177px] left-[660px] text-[40px] absolute [font-family:'Poppins',Helvetica] font-medium text-white tracking-[0] leading-[normal]">
            VIDEO
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="absolute top-[2595px] left-[150px] w-[1140px]">
          <div className="grid grid-cols-4 gap-12">
            {videoCards.map((card, index) => (
              <Card
                key={index}
                className="w-[250px] h-[250px] bg-black rounded-[20px] shadow-[0px_4px_4px_#00000040]"
              >
                <CardContent className="p-0 flex items-center justify-center h-full">
                  <div className="[font-family:'Poppins',Helvetica] font-medium text-white text-[25px] tracking-[0] leading-[normal]">
                    {card.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
