import { Card, CardContent } from "../components/ui/card";

export const Entrepeneur = (): JSX.Element => {
  // Portfolio project data
  const portfolioProjects = [
    { id: 1, name: "Zpedidos", image: "/rectangle-15.png", alt: "Rectangle" },
    { id: 2, name: "Dlokoz", image: "/image-4.png", alt: "Image" },
    { id: 3, name: "Videoviral", image: "/image-5.svg", alt: "Image" },
    { id: 4, name: "Tentstacle", image: "/color-logo.png", alt: "Color logo" },
    { id: 5, name: "Smitocap", image: "/rectangle-35.png", alt: "Rectangle" },
    { id: 6, name: "Blakerz", image: "/image-2.png", alt: "Image" },
    { id: 7, name: "Grele", image: "/image.png", alt: "Image" },
    { id: 8, name: "Elkova", image: "/image-1.png", alt: "Image" },
    { id: 9, name: "Drakoz", image: "/image-3.png", alt: "Image" },
    { id: 10, name: "Tatumania", image: "/rectangle-34.svg", alt: "Rectangle" },
    { id: 11, name: "Gymbro", image: "/rectangle-32.png", alt: "Rectangle" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full pt-6 md:pt-12">
      <div className="bg-white overflow-hidden w-full md:w-[1440px] relative">
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-[75px] md:gap-y-[35px] px-4 md:px-[94px] pt-8 md:pt-[164px]">
          {portfolioProjects.map((project) => (
            <div key={project.id} className="flex flex-col items-center w-full md:w-[367px]">
              <Card className="w-full md:w-[367px] border-none shadow-none rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <img
                    className="w-full h-[200px] md:h-[284px] object-cover rounded-2xl"
                    alt={project.alt}
                    src={project.image}
                  />
                </CardContent>
              </Card>
              <div className="font-h3 text-2xl md:text-[35px] font-[600] text-black mt-2 text-center w-full">
                {project.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
