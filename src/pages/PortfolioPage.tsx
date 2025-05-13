import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom"; // importar Link

const projects = [
  {
    id: 1,
    title: "Zpedidos",
    imageUrl:
      "https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg",
    logoColor: "bg-red-500",
    textColor: "text-gray-800",
  },
  {
    id: 2,
    title: "Aayra",
    imageUrl:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
    logoColor: "bg-white",
    textColor: "text-gray-800",
  },
  {
    id: 3,
    title: "Zrepartidores",
    imageUrl:
      "https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg",
    logoColor: "bg-red-500",
    textColor: "text-gray-800",
  },
  {
    id: 4,
    title: "PMI WA",
    imageUrl:
      "https://images.pexels.com/photos/5632405/pexels-photo-5632405.jpeg",
    logoColor: "bg-purple-600",
    textColor: "text-gray-800",
  },
  {
    id: 5,
    title: "Smitocap",
    imageUrl:
      "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg",
    logoColor: "bg-cyan-500",
    textColor: "text-gray-800",
  },
  {
    id: 6,
    title: "Zgestion",
    imageUrl:
      "https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg",
    logoColor: "bg-red-500",
    textColor: "text-gray-800",
  },
  {
    id: 7,
    title: "Tentactacle",
    imageUrl:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
    logoColor: "bg-teal-600",
    textColor: "text-gray-800",
  },
  {
    id: 8,
    title: "Qaway",
    imageUrl:
      "https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg",
    logoColor: "bg-blue-500",
    textColor: "text-gray-800",
  },
  {
    id: 9,
    title: "Zrestaurant",
    imageUrl:
      "https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg",
    logoColor: "bg-red-500",
    textColor: "text-gray-800",
  },
  {
    id: 10,
    title: "Rude Glasses",
    imageUrl:
      "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg",
    logoColor: "bg-gray-800",
    textColor: "text-gray-800",
  },
  {
    id: 11,
    title: "Sydney Clothes",
    imageUrl:
      "https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg",
    logoColor: "bg-white",
    textColor: "text-gray-800",
  },
];

const PortfolioPage: React.FC = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "Zpedidos",
      image: "/rectangle-15.png",
      row: 1,
      col: 1,
      link: "/portfolio/zpedidos",
    },
    {
      id: 2,
      title: "Aayra",
      image: "/rectangle-19.svg",
      row: 1,
      col: 2,
      link: "/portfolio/aayra",
    },
    {
      id: 3,
      title: "Tentstacle",
      image: "/rectangle-22.png",
      row: 1,
      col: 3,
      link: "/portfolio/tentstacle",
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
      title: "Smitocap",
      image: "/rectangle-21.png",
      row: 2,
      col: 2,
      link: "/portfolio/smitocap",
    },
    {
      id: 6,
      title: "Sydney Clothes",
      image: "/rectangle-33.svg",
      row: 2,
      col: 3,
      link: "/portfolio/sydneyclothes",
    },
    {
      id: 7,
      title: "Rude Glasses",
      image: "/rectangle-29.png",
      row: 3,
      col: 1,
      link: "/portfolio/rudeglasses",
    },
    {
      id: 8,
      title: "Qaway",
      image: "/rectangle-23.png",
      row: 3,
      col: 2,
      link: "/portfolio/qaway",
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

export default PortfolioPage;
