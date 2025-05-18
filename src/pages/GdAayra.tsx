import React from "react";
import { Card, CardContent } from "../components/ui/card";

export const GdAayra = (): JSX.Element => {
  // Portfolio items data
  const portfolioItems = [
    { src: "/rectangle-37.svg", alt: "Rectangle" },
    { src: "/rectangle-38.svg", alt: "Rectangle" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] relative">
        {/* Hero Section */}
        <section className="relative">
          <img
            className="w-full h-[423px]"
            alt="Background"
            src="/fondoaira.png"
          />
        </section>

        {/* Web Design Section */}
        <section className="px-[150px] mt-[100px]">
          <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
            Web design and branding
          </h2>

          <div className="mt-[30px] max-w-[1140px]">
            <p className="font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
              I had to design and improve the logo in better quality, as well as
              design the website to have better visualizations, because it is an
              art site.
            </p>
          </div>
        </section>

        {/* Work Section */}
        <section className="px-[150px] mt-[65px]">
          <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
            Work
          </h2>

          <div className="flex gap-10 mt-[30px]">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="w-[258px] h-[258px] border-none">
                <CardContent className="p-0">
                  <img
                    className="w-full h-full object-cover"
                    alt={item.alt}
                    src={item.src}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
