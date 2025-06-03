import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

const AboutPage: React.FC = () => {
  // Skills data for the bar chart
  const skillsData = [
    { name: "UX/UI Design", level: "Expert", color: "#f9bf3b" },
    { name: "Graphic & Web Design", level: "Expert", color: "#ff6b6b" },
    { name: "Community Manager", level: "Proficient", color: "#f79a3c" },
    { name: "Entrepeneur", level: "ExpertProficient", color: "#202124" },
    { name: "Gym", level: "Proficient", color: "#0048ff" },
    { name: "Video Games", level: "Familiar", color: "#ffe100" },
  ];

  // Designer skills data
  const designerSkills = [
    "UX design",
    "UI design",
    "Marketing",
    "Community manager",
    "Web design",
    "Graphic design",
    "IT Support",
    "HTML / CSS",
  ];

  // Entrepreneur skills data
  const entrepreneurSkills = [
    "Running businesses",
    "Delivery APP 50K+ Downloads",
    "Large format printing company",
    "Ice cream company",
    "Youtuber +50K Suscribers",
    "E-commerce",
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      {/* Desktop Version - Hidden on mobile */}
      <div className="hidden md:block bg-white overflow-hidden w-[1440px] h-[2100px] relative">
        {/* About Me Section */}
        <Card className="absolute w-full max-w-[1441px] h-[747px] top-[00px] -left-px bg-white border-0 shadow-none">
          <CardContent className="p-0 h-full relative">
            <h2 className="absolute w-[281px] top-[124px] left-[101px] [font-family:'Amaranth',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
              About me
            </h2>

            <p className="absolute w-full max-w-[625px] top-[214px] left-[101px] font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
              I&#39;m a UX designer based in Perth, Australia.
              <br />
              <br />
              Since 2019, I enjoy developing intuitive interfaces basically I
              love making people&#39;s lives easy. When I&#39;m not designing,
              you&#39;ll find me cooking, thinking a business idea, at the gym
              or playing video games.
            </p>

            {/* Profile image */}
            <div className="absolute w-[469px] h-[355px] top-[125px] left-[846px] rotate-180">
              <img
                className="absolute w-[477px] h-[363px] -top-2 -left-1 -rotate-180 object-cover rounded-[20px]"
                alt="Image"
                src="/4.jpg"
              />
            </div>

            {/* Gallery images */}
            <div className="absolute flex flex-wrap gap-4 w-full max-w-[1200px] top-[538px] left-[101px]">
              <div className="w-[140px] h-[140px] rotate-180">
                <img
                  className="w-full h-full -rotate-180 object-cover rounded-[20px]"
                  alt="Image"
                  src="/4.jpg"
                />
              </div>
              <div className="w-[140px] h-[140px] rotate-180">
                <img
                  className="w-full h-full -rotate-180 object-cover rounded-[20px]"
                  alt="Image"
                  src="/3.jpg"
                />
              </div>
              <div className="w-[140px] h-[140px] rotate-180">
                <img
                  className="w-full h-full -rotate-180 object-cover rounded-[20px]"
                  alt="Image"
                  src="/2.jpg"
                />
              </div>
              <div className="w-[140px] h-[140px] rotate-180">
                <img
                  className="w-full h-full -rotate-180 object-cover rounded-[20px]"
                  alt="Image"
                  src="/1.jpg"
                />
              </div>
              <div className="w-[140px] h-[140px] rotate-180">
                <div className="h-[140px] bg-[#c4c4c4] rounded-[20px] rotate-180" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator className="absolute w-full h-0.5 top-[747px] left-0 bg-gray-200" />

        {/* Designer/Entrepreneur Section */}
        <Card className="absolute w-[1441px] h-[645px] top-[797px] -left-px bg-white border-0 shadow-none">
          <CardContent className="p-0 h-full relative">
            <h2 className="top-[113px] left-[99px] absolute font-h2 font-[number:var(--h2-font-weight)] text-black text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              Part <br />
              Designer
            </h2>

            <h2 className="w-48 top-[122px] left-[1034px] absolute font-h2 font-[number:var(--h2-font-weight)] text-black text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              Part Entrepeneur
            </h2>

            <div className="absolute top-[249px] left-[101px] font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
              {designerSkills.map((skill, index) => (
                <React.Fragment key={index}>
                  {skill}
                  <br />
                </React.Fragment>
              ))}
            </div>

            <div className="absolute top-[249px] left-[1034px] font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
              {entrepreneurSkills.map((skill, index) => (
                <React.Fragment key={index}>
                  {skill}
                  <br />
                </React.Fragment>
              ))}
            </div>

            {/* Venn diagram */}
            <img
              className="absolute w-[275px] h-[388px] top-[88px] left-[657px]"
              alt="Ellipse"
              src="/ellipse-3.svg"
            />
            <img
              className="absolute w-[385px] h-[446px] top-[102px] left-[467px]"
              alt="Ellipse"
              src="/ellipse-4.svg"
            /> 
          </CardContent>
        </Card>

        <Separator className="absolute w-full h-0.5 top-[1392px] left-0 bg-gray-200" />

        {/* Skills Section */}
        <Card className="absolute w-[1441px] h-[400px] top-[1442px] -left-px bg-white border-0 shadow-none">
          <CardContent className="p-0 h-full relative">
            <h2 className="absolute w-[243px] top-[38px] left-[600px] [font-family:'Amaranth',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal]">
              Skills
            </h2>

            <div className="absolute w-[1262px] h-[449px] top-[126px] left-[101px]">
              <div className="relative w-full h-full">
                {/* Level labels and horizontal lines */}
                {["Master", "Expert", "Proficient", "Familiar", "Beginner"].map((level, index) => (
                  <div key={level} className="absolute w-full" style={{ top: `${index * 100}px` }}>
                    <div className="absolute left-0 text-black font-text-1 text-[16px]">{level}</div>
                    <div className="absolute left-[150px] right-0 h-[1px] bg-gray-200" />
                  </div>
                ))}

                {/* Skill bars */}
                <div className="absolute left-[150px] right-0 top-0 h-full flex items-end justify-between px-4">
                  {skillsData.map((skill, index) => {
                    let barHeight;
                    switch(skill.level) {
                      case "Expert":
                        barHeight = 349; // Total 49px added to reach Expert line
                        break;
                      case "Proficient":
                        barHeight = 249; // Total 49px added to reach Proficient line
                        break;
                      case "ExpertProficient":
                        barHeight = 299; // Total 49px added for consistency
                        break;
                      case "Familiar":
                        barHeight = 149; // Total 49px added to reach Familiar line
                        break;
                      default:
                        barHeight = 99; // Total 49px added for Beginner
                    }
                    return (
                      <div key={index} className="relative" style={{ width: '120px' }}>
                        <div 
                          className="w-full rounded-[10px]"
                          style={{
                            backgroundColor: skill.color,
                            height: `${barHeight}px`,
                            transition: 'height 0.3s ease'
                          }}
                        />
                        <div className="absolute top-full mt-4 text-center w-full text-black font-text-1 text-[14px] whitespace-pre-wrap">
                          {skill.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        
      </div>

      {/* Mobile Version - Hidden on desktop */}
      <div className="md:hidden w-full px-4 pb-12">
        {/* About Section Mobile */}
        <Card className="w-full bg-white border-0 shadow-none mb-8">
          <CardContent className="p-4">
            <h2 className="font-amaranth font-bold text-3xl mb-6">About me</h2>
            <p className="text-base mb-6">
              I&#39;m a UX designer based in Perth, Australia.
              <br /><br />
              Since 2019, I enjoy developing intuitive interfaces basically I
              love making people&#39;s lives easy. When I&#39;m not designing,
              you&#39;ll find me cooking, thinking a business idea, at the gym
              or playing video games.
            </p>
            
            <img
              className="w-full h-[250px] object-cover rounded-[20px] mb-6"
              alt="Profile"
              src="/4.jpg"
            />

            <div className="flex overflow-x-auto gap-4 pb-4">
              {["/4.jpg", "/3.jpg", "/2.jpg", "/1.jpg"].map((src, index) => (
                <img
                  key={index}
                  className="w-[140px] h-[140px] flex-shrink-0 object-cover rounded-[20px]"
                  alt={`Gallery ${index + 1}`}
                  src={src}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* Designer/Entrepreneur Section Mobile */}
        <Card className="w-full bg-white border-0 shadow-none mb-8">
          <CardContent className="p-4">
            <div className="mb-8">
              <h2 className="font-amaranth font-bold text-2xl mb-4">Part Designer</h2>
              <ul className="space-y-2">
                {designerSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="font-amaranth font-bold text-2xl mb-4">Part Entrepreneur</h2>
              <ul className="space-y-2">
                {entrepreneurSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* Skills Section Mobile */}
        <Card className="w-full bg-white border-0 shadow-none">
          <CardContent className="p-4">
            <h2 className="font-amaranth font-bold text-2xl mb-6 text-center">Skills</h2>
            
            <div className="relative w-full h-[300px]">
              {/* Level labels and horizontal lines */}
              {["Master", "Expert", "Proficient", "Familiar", "Beginner"].map((level, index) => (
                <div key={level} className="absolute w-full" style={{ top: `${index * 60}px` }}>
                  <div className="absolute left-0 text-black text-xs">{level}</div>
                  <div className="absolute left-[60px] right-0 h-[1px] bg-gray-200" />
                </div>
              ))}

              {/* Skill bars */}
              <div className="absolute left-[60px] right-0 top-0 h-full flex items-end justify-between">
                {skillsData.map((skill, index) => {
                  let barHeight;
                  switch(skill.level) {
                    case "Expert":
                      barHeight = 240; // Increased to match Expert line exactly
                      break;
                    case "Proficient":
                      barHeight = 180; // Increased to match Proficient line
                      break;
                    case "ExpertProficient":
                      barHeight = 210; // Increased for between Expert and Proficient
                      break;
                    case "Familiar":
                      barHeight = 120; // Increased to match Familiar line
                      break;
                    default:
                      barHeight = 60; // Increased to match Beginner line
                  }
                  return (
                    <div key={index} className="relative" style={{ width: '40px' }}>
                      <div 
                        className="w-full rounded-[6px]"
                        style={{
                          backgroundColor: skill.color,
                          height: `${barHeight}px`,
                          transition: 'height 0.3s ease'
                        }}
                      />
                      <div className="absolute top-full mt-2 text-center w-full text-black text-[10px] whitespace-pre-wrap">
                        {skill.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
