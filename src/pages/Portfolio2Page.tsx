import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom";

const Portfolio2Page: React.FC = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "Zpedidos",
      image: "/rectangle-15.png",
      row: 1,
      col: 1,
      link: "/ux-portfolio-zpedidos",
    },
    {
      id: 2,
      title: "Aayra",
      image: "/rectangle-19.svg",
      row: 1,
      col: 2,
      link: "/UxAayra",
    },
    {
      id: 3,
      title: "Proud of you",
      image: "/3ec70ff2b25dcb588c30d91d482a5d443b929641.png",
      row: 1,
      col: 3,
      link: "",
    },
    {
      id: 4,
      title: "PMI WA",
      image: "/rectangle-20.svg",
      row: 2,
      col: 1,
      link: "/portfolio/pmiwa",
    },
    {
      id: 5,
      title: "ZTask",
      image: "/e064b9ea10d6a5f77fcfc3eecd57f166c3d12294.png",
      row: 2,
      col: 2,
      link: "",
    },
    {
      id: 6,
      title: "Tentstacle",
      image: "/rectangle-22.png",
      row: 2,
      col: 3,
      link: "/portfolio/tentstacle",
    },
    {
      id: 7,
      title: "ZBurger",
      image: "/f911eac3f7f18b70f36e5604e8ae11a1d7e6abb1.png",
      row: 3,
      col: 1,
      link: "",
    },
  ];
  return (
    <div className="bg-white flex flex-row justify-center w-full pt-6 md:pt-12">
      <div className="bg-white overflow-hidden w-full md:w-[1440px] relative">
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-[75px] md:gap-y-[35px] px-4 md:px-[94px] pt-8 md:pt-[164px]">
          {portfolioProjects.map((project) => (
            <div key={project.id} className="flex flex-col items-center w-full md:w-[367px]">
              <Link to={project.link}>
                <Card className="w-full md:w-[367px] border-none shadow-none rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      className="w-full md:w-[367px] h-[200px] md:h-[284px] object-cover rounded-2xl"
                      alt={project.title}
                      src={project.image}
                    />
                  </CardContent>
                </Card>
              </Link>
              <div className="font-h3 text-2xl md:text-[35px] font-[600] text-black mt-2 text-center w-full">
                {project.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio2Page;
