import { Card, CardContent } from "../components/ui/card";

export const GdRued = (): JSX.Element => {
  // Portfolio logos data
  const portfolioLogos = [
    { src: "/i-candy-black.png", alt: "I CANDY black" },
    { src: "/logo-rued2.png", alt: "Logo" },
    { src: "/logo-rued1.png", alt: "Logo" },
    { src: "/logo-rued3.png", alt: "Logo" },
    { src: "/rued-logo.png", alt: "Rued logo" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] relative">
        {/* Banner Image */}
        <img
          className="w-full h-[423px] object-cover"
          alt="Banner"
          src="/candy.png"
        />

        {/* Portfolio Section */}
        <section className="py-16 px-10">
          <div className="grid grid-cols-4 gap-8">
            {portfolioLogos.slice(0, 4).map((logo, index) => (
              <Card key={index} className="border-none shadow-none">
                <CardContent className="p-0">
                  <img
                    className="w-[258px] h-[258px]"
                    alt={logo.alt}
                    src={logo.src}
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-8 mt-8">
            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <img
                  className="w-[258px] h-[258px]"
                  alt={portfolioLogos[4].alt}
                  src={portfolioLogos[4].src}
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};
