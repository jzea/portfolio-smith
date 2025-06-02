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
    <div className="bg-white flex flex-row justify-center w-full pt-12">
      <div className="bg-white overflow-hidden w-[1440px] h-[2200px] relative">
        {/* About Me Section */}
        <Card className="absolute w-full max-w-[1441px] h-[747px] top-[98px] -left-px bg-white border-0 shadow-none">
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

        {/* Divider between About Me and Designer/Entrepreneur */}
        <Separator className="absolute w-full h-0.5 top-[795px] left-0 bg-gray-200" />

        {/* Designer/Entrepreneur Section */}
        <Card className="absolute w-[1441px] h-[645px] top-[845px] -left-px bg-white border-0 shadow-none">
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

        {/* Divider between Designer/Entrepreneur and Skills */}
        <Separator className="absolute w-full h-0.5 top-[1444px] left-0 bg-gray-200" />

        {/* Skills Section */}
        <Card className="absolute w-[1441px] h-[400px] top-[1494px] -left-px bg-white border-0 shadow-none">
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
                    let barHeight = 49; // Default for Beginner
                    if (skill.name === "UX/UI Design" || skill.name === "Graphic & Web Design") {
                      barHeight = 349; // Expert
                    } else if (skill.name === "Community Manager" || skill.name === "Gym") {
                      barHeight = 249; // Proficient
                    } else if (skill.name === "Entrepeneur") {
                      barHeight = 299; // Between Expert and Proficient
                    } else if (skill.name === "Video Games") {
                      barHeight = 149; // Familiar
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
    </div>
  );
};

export default AboutPage;
