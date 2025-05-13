import React from "react";
import { Card, CardContent } from "../components/ui/card";

const ZpedidosPage: React.FC = () => {
  const portfolioImages = [
    // First row
    { src: "/rectangle-37.png", alt: "Rectangle" },
    { src: "/rectangle-38.png", alt: "Rectangle" },
    {
      src: "/81941746-450236269216069-3463896596012335104-n.png",
      alt: "Element",
    },
    {
      src: "/86394231-481775586062137-8416117609128263680-n.png",
      alt: "Element",
    },
    // Second row
    {
      src: "/101696365-556723031900725-4697546533548064768-n.png",
      alt: "Element",
    },
    {
      src: "/101823112-556723025234059-6086253784130912256-n.png",
      alt: "Element",
    },
    {
      src: "/102555632-556723018567393-4480633561065455616-n.png",
      alt: "Element",
    },
    {
      src: "/102279735-558480755058286-6304798561945066484-n.png",
      alt: "Element",
    },
    // Third row
    {
      src: "/105925675-571875180385510-1316500893792734043-n.png",
      alt: "Element",
    },
    {
      src: "/107959509-586783928894635-7847855375148319654-n.png",
      alt: "Element",
    },
    {
      src: "/109720653-586783968894631-135156496289890048-n.png",
      alt: "Element",
    },
    {
      src: "/109727983-586783785561316-5406223201089382998-n.png",
      alt: "Element",
    },
    // Fourth row
    {
      src: "/109789398-586028408970187-222322127376661469-n.png",
      alt: "Element",
    },
    {
      src: "/109916625-586783808894647-2344689519139559419-n.png",
      alt: "Element",
    },
    {
      src: "/109979118-586783888894639-4691339887852922613-n.png",
      alt: "Element",
    },
    {
      src: "/110018418-589827878590240-1841378945065847830-n.png",
      alt: "Element",
    },
    // Fifth row
    {
      src: "/110305824-586783842227977-3567286856672938401-n.png",
      alt: "Element",
    },
    {
      src: "/115688031-595827894656905-690435985013368811-n.png",
      alt: "Element",
    },
    {
      src: "/116878558-602158264023868-2022941403288373709-n.png",
      alt: "Element",
    },
    {
      src: "/117168348-604219333817761-3439103257215028143-n.png",
      alt: "Element",
    },
    // Sixth row
    {
      src: "/117833779-609757703263924-2886242693410465874-n-1.png",
      alt: "Element",
    },
    {
      src: "/118197626-621201635452864-1854837494659880535-n.png",
      alt: "Element",
    },
    {
      src: "/120007673-641389873434040-6574703179976319191-n.png",
      alt: "Element",
    },
    {
      src: "/120194426-643045406601820-6407972523190633337-n.png",
      alt: "Element",
    },
    // Seventh row
    {
      src: "/120744298-649248625981498-15841609658143499-n.png",
      alt: "Element",
    },
    {
      src: "/122227301-659589894947371-1916339845650825182-n.png",
      alt: "Element",
    },
    {
      src: "/122788412-668084810764546-2409944133588654677-n.png",
      alt: "Element",
    },
    {
      src: "/122995961-669861360586891-670099364190955378-n.png",
      alt: "Element",
    },
    // Eighth row
    {
      src: "/123039207-666369097602784-2403791334110176171-n.png",
      alt: "Element",
    },
    {
      src: "/123191360-669861240586903-891609359445892114-n.png",
      alt: "Element",
    },
    {
      src: "/123503494-669861223920238-8884361321433365617-n.png",
      alt: "Element",
    },
    {
      src: "/128862464-695510451355315-5595831925200493187-n.png",
      alt: "Element",
    },
    // Ninth row
    {
      src: "/130244630-702232434016450-6633222333553870391-n.png",
      alt: "Element",
    },
    {
      src: "/136753261-723134838592876-4181200016579282429-n.png",
      alt: "Element",
    },
    {
      src: "/138581044-724385348467825-607151593419644474-n.png",
      alt: "Element",
    },
    {
      src: "/143195953-734769627429397-1252584000800748315-n.png",
      alt: "Element",
    },
  ];
  const videoCards = Array(8).fill({ title: "VIDEO" });

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] relative">
        {/* Hero Image */}
        <img
          className="w-full h-[423px] object-cover"
          alt="Element"
          src="/117833779-609757703263924-2886242693410465874-n-1.png"
        />

        {/* Project Title */}
        <div className="mt-24 mx-[150px]">
          <h1 className="font-h3 text-black text-[35px]">Delivery App</h1>

          {/* Project Description */}
          <div className="mt-6 mb-10">
            <p className="font-text-1 text-black text-[18px] mb-8">
              My brother and I created a delivery app because many smaller
              cities in Peru didn&apos;t have food delivery services—people had
              to call restaurants to place orders. During the COVID-19 pandemic,
              our app became even more important. We helped families stay safe
              by delivering food and medicine to their homes, and we also gave
              restaurants and delivery workers a way to keep working. We helped
              thousands of people shift from phone calls to a faster, safer way
              to order online.
            </p>
            <h2 className="font-h3 text-black text-[35px]">Work</h2>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-4 gap-[39px] mx-[146px]">
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
        <div className="w-full h-[415px] bg-black shadow-[0px_4px_4px_#00000040] mt-10 flex items-center justify-center">
          <div className="font-['Poppins',Helvetica] font-medium text-white text-[40px]">
            VIDEO
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-4 gap-[47px] mx-[150px] mt-10">
          {videoCards.map((card, index) => (
            <Card
              key={index}
              className="w-[250px] h-[250px] bg-black rounded-[20px] shadow-[0px_4px_4px_#00000040]"
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

export default ZpedidosPage;
