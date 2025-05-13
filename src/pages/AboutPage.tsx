import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

const AboutPage: React.FC = () => {
  const navLinks = ["About me", "Portfolio", "Contact me", "Blog"];

  // Skills data for the bar chart
  const skillsData = [
    { name: "Web Design", level: "Master", height: "273px", color: "#f9bf3b" },
    {
      name: "Graphic Design",
      level: "Master",
      height: "273px",
      color: "#ff6b6b",
    },
    {
      name: "Community\nManager",
      level: "Proficient",
      height: "201px",
      color: "#f79a3c",
    },
    { name: "Entrepeneur", level: "Expert", height: "231px", color: "#202124" },
    { name: "Gym", level: "Proficient", height: "201px", color: "#0048ff" },
    {
      name: "Video Games",
      level: "Familiar",
      height: "132px",
      color: "#ffe100",
    },
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

  // Social media icons data
  const socialIcons = [
    { src: "/vector.svg", alt: "Vector" },
    { src: "/vector-7.svg", alt: "Vector" },
    { src: "/vector-1.svg", alt: "Vector", hasBackground: true },
    { src: "/instagram-logo-2016-1.svg", alt: "Instagram logo" },
    { src: "/vector-2.svg", alt: "Vector" },
  ];

  // Footer social icons data
  const footerSocialIcons = [
    { src: "/vector.svg", alt: "Vector" },
    { src: "/vector-7.svg", alt: "Vector" },
    { src: "/vector-1.svg", alt: "Vector", hasBackground: true },
    { src: "/vector-3.svg", alt: "Vector" },
    { src: "/linkedin-logo-1.svg", alt: "Linkedin logo" },
  ];
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[3025px] relative">
        {/* Skills Section */}
        <Card className="absolute w-[1441px] h-[645px] top-[1494px] -left-px shadow-[0px_4px_4px_#00000040]">
          <CardContent className="p-0 h-full relative">
            <h2 className="absolute w-[243px] top-[38px] left-[600px] font-h2 font-[number:var(--h2-font-weight)] text-black text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              Skills
            </h2>

            <div className="absolute w-[1262px] h-[449px] top-[126px] left-[101px]">
              {/* Skill level labels */}
              <div className="absolute w-[150px] top-0 left-0 font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                Master
              </div>
              <div className="absolute w-[150px] top-[72px] left-0 font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                Expert
              </div>
              <div className="absolute w-[150px] top-[43px] left-0 font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                Proficient
              </div>
              <div className="absolute w-[150px] top-[115px] left-0 font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                Familiar
              </div>
              <div className="absolute w-[150px] top-[187px] left-0 font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                Beginner
              </div>

              {/* Horizontal lines */}
              <Separator className="absolute w-[1240px] h-0.5 top-[29px] left-0" />
              <Separator className="absolute w-[1240px] h-0.5 top-0 left-0" />
              <Separator className="absolute w-[1240px] h-0.5 top-36 left-0" />
              <Separator className="absolute w-[1240px] h-0.5 top-[216px] left-0" />
              <Separator className="absolute w-[1240px] h-0.5 top-[72px] left-0" />

              {/* Skill bars */}
              <div className="absolute w-[1240px] h-[277px] top-[101px] left-0">
                {skillsData.map((skill, index) => (
                  <div
                    key={index}
                    className={`absolute w-[124px] h-[${skill.height}] top-${
                      skill.level === "Master"
                        ? "px"
                        : skill.level === "Expert"
                        ? "[43px]"
                        : skill.level === "Proficient"
                        ? "[73px]"
                        : "[145px]"
                    } left-[${181 + index * 179}px] bg-[${
                      skill.color
                    }] rounded-[9px_9px_0px_0px]`}
                    style={{
                      height: skill.height,
                      backgroundColor: skill.color,
                      left: `${181 + index * 179}px`,
                      top:
                        skill.level === "Master"
                          ? "1px"
                          : skill.level === "Expert"
                          ? "43px"
                          : skill.level === "Proficient"
                          ? "73px"
                          : "145px",
                    }}
                  />
                ))}
              </div>

              {/* Skill names */}
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className={`absolute top-[395px] left-[${
                    181 + index * 179
                  }px] font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] ${
                    skill.name.includes("\n") ? "text-center" : ""
                  } tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]`}
                  style={{ left: `${181 + index * 179}px` }}
                >
                  {skill.name.includes("\n") ? (
                    <>
                      Community
                      <br />
                      Manager
                    </>
                  ) : (
                    skill.name
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Designer/Entrepreneur Section */}
        <Card className="absolute w-[1441px] h-[645px] top-[845px] -left-px shadow-[0px_4px_4px_#00000040]">
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

        {/* About Me Section */}
        <Card className="absolute w-[1441px] h-[747px] top-[98px] -left-px shadow-[0px_4px_4px_#00000040]">
          <CardContent className="p-0 h-full relative">
            <h2 className="absolute w-[281px] top-[124px] left-[101px] [font-family:'Amaranth',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
              About me
            </h2>

            <p className="absolute w-[625px] top-[214px] left-[101px] font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
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
                className="absolute w-[477px] h-[363px] -top-2 -left-1 -rotate-180 object-cover"
                alt="Image"
                src="/image-1.png"
              />
            </div>

            {/* Gallery images */}
            <div className="absolute w-[140px] h-[140px] top-[538px] left-[101px] rotate-180">
              <img
                className="absolute w-[148px] h-[148px] -top-2 -left-1 -rotate-180 object-cover"
                alt="Image"
                src="/image-1.png"
              />
            </div>
            <div className="absolute w-[140px] h-[140px] top-[538px] left-[312px] rotate-180">
              <img
                className="absolute w-[148px] h-[148px] -top-2 -left-1 -rotate-180 object-cover"
                alt="Image"
                src="/image-2.png"
              />
            </div>
            <div className="absolute w-[140px] h-[140px] top-[538px] left-[525px] rotate-180">
              <img
                className="absolute w-[148px] h-[148px] -top-2 -left-1 -rotate-180 object-cover"
                alt="Image"
                src="/image-3.png"
              />
            </div>
            <div className="absolute w-[140px] h-[140px] top-[538px] left-[740px] rotate-180">
              <img
                className="absolute w-[148px] h-[148px] -top-2 -left-1 -rotate-180 object-cover"
                alt="Image"
                src="/image-4.png"
              />
            </div>
            <div className="absolute w-[140px] h-[140px] top-[538px] left-[953px] rotate-180">
              <div className="h-[140px] bg-[#c4c4c4] rounded-[20px] rotate-180 shadow-[0px_4px_4px_#00000040]" />
            </div>
          </CardContent>
        </Card>

        {/* Header */}
      </div>
    </div>
  );
};

export default AboutPage;
