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
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] relative">
        {/* Portfolio Grid */}
        <div className="grid grid-cols-3 gap-x-[76px] gap-y-[30px] px-[94px] pt-[164px]">
          {portfolioProjects.map((project) => (
            <Card
              key={project.id}
              className="w-[367px] border-none shadow-none"
            >
              <CardContent className="p-0">
                <img
                  className="w-full h-[285px] object-cover rounded-md"
                  alt={project.alt}
                  src={project.image}
                />
                <div className="mt-8 mb-12 text-center font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                  {project.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
