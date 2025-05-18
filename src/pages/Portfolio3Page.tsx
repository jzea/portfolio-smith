import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom";

const Portfolio3Page: React.FC = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "Zrestaurant",
      image: "/rectangle-15.png",
      row: 1,
      col: 1,
      link: "/uxzpedidosrestarant",
    },
    {
      id: 2,
      title: "Zgestion",
      image: "/rectangle-15.png",
      row: 1,
      col: 2,
      link: "",
    },
    {
      id: 3,
      title: "Zrepartidores",
      image: "/rectangle-15.png",
      row: 1,
      col: 3,
      link: "",
    },
    {
      id: 4,
      title: "ZPedidos",
      image: "/rectangle-15.png",
      row: 2,
      col: 1,
      link: "/uxzpedidosweb",
    },
  ];
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] relative">
        {/* Portfolio Grid */}
        <div className="grid grid-cols-3 gap-x-[75px] gap-y-[35px] px-[94px] pt-[164px]">
          {portfolioProjects.map((project) => (
            <div key={project.id} className="flex flex-col items-center">
              <Link to={project.link}>
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <img
                      className="w-[367px] h-[284px] object-cover"
                      alt={project.title}
                      src={project.image}
                    />
                  </CardContent>
                </Card>
              </Link>
              <div className="font-h3 text-[35px] font-[600] text-black mt-2 text-center">
                {project.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio3Page;
