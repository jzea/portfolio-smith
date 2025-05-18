import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[2368px] relative">
        {/* First Section - UX Design Portfolio */}
        <div className="absolute w-[1441px] h-[961px] top-[94px] left-0">
          <div className="w-[1441px] h-[485px] top-[476px] bg-[#f9bf3b] rotate-180 shadow-[0px_4px_4px_#00000040] absolute left-0" />
          <img
            className="absolute w-[357px] h-[436px] top-[501px] left-[779px] object-cover"
            alt="Phone food"
            src="/phone-food-1.png"
          />
          <div className="absolute top-[611px] left-[68px] font-h1 font-[number:var(--h1-font-weight)] text-white text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
            UX Design
            <br />
            Portfolio
          </div>
          <div className="absolute top-[767px] left-[68px] font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
            It is a website about my UX designs. It <br />
            contains my projects
          </div>
          <img
            className="absolute w-[723px] h-[484px] top-0 left-[717px]"
            alt="Image"
            src="/face.png"
          />
          <img
            className="absolute w-[725px] h-[484px] top-0 left-0"
            alt="Image"
            src="/image-11.png"
          />
          <div className="absolute w-[229px] h-[50px] top-[836px] left-[68px]">
            <Link to="/ux-portfolio">
              <Button
                variant="outline"
                className="relative w-[230px] h-[53px] -top-0.5 -left-0.5 rounded-[10px] border-[3px] border-solid border-white"
              >
                <span className="absolute top-2.5 left-[52px] font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] text-center tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                  Check it out
                </span>
              </Button>
            </Link>
          </div>
        </div>
        {/* Second and Third Sections */}
        <div className="absolute w-[1445px] h-[1311px] top-[1059px] left-0">
          {/* Graphic Design Portfolio Section */}
          <div className="absolute w-[1441px] h-[485px] top-0 left-0 bg-[#ff6b6b] rotate-180 shadow-[0px_4px_4px_#00000040]" />
          {/* Entrepreneur Resume Section */}
          <div className="w-[1441px] h-[485px] top-[478px] bg-[#202124] rotate-180 shadow-[0px_4px_4px_#00000040] absolute left-0" />
          {/* Graphic Design Portfolio Content */}
          {/* Imágenes moto y bici alineadas como en tu ejemplo */}
          <div className="absolute top-[80px] left-[120px] flex flex-row gap-8 items-center">
            <img
              src="/MOTO.png"
              alt="Moto"
              className="w-[220px] h-[220px] object-contain"
              style={{ marginTop: "40px" }}
            />
            <img
              src="/BICYCLE.png"
              alt="Bici"
              className="w-[220px] h-[220px] object-contain -ml-10"
              style={{ marginBottom: "100px" }}
            />
          </div>
          <div className="absolute top-[120px] left-[873px] [font-family:'Londrina_Solid',Helvetica] font-normal text-white text-6xl tracking-[0] leading-[normal]">
            Graphic Designs
            <br />
            Portfolio
          </div>
          <div className="top-[263px] left-[873px] text-black absolute font-text-1 font-[number:var(--text-1-font-weight)] text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
            It is a website about my UX designs. It <br />
            contains my projects
          </div>
          {/* Entrepreneur Resume Content */}
          <div className="absolute top-[634px] left-[68px] [font-family:'Londrina_Solid',Helvetica] font-normal text-white text-6xl tracking-[0] leading-[normal]">
            Entrepeneur
            <br />
            Resume
          </div>
          <div className="top-[776px] left-[68px] text-white absolute font-text-1 font-[number:var(--text-1-font-weight)] text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
            It is a website about my UX designs. It <br />
            contains my projects
          </div>

          {/* Buttons for Graphic Design and Entrepreneur sections */}
          <div className="absolute w-[229px] h-[50px] top-[332px] left-[873px]">
            <Link to="/portfolio">
              <Button
                variant="outline"
                className="relative w-[230px] h-[53px] -top-0.5 -left-0.5 rounded-[10px] border-[3px] border-solid border-white"
              >
                <span className="absolute top-2.5 left-[52px] font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] text-center tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                  Check it out
                </span>
              </Button>
            </Link>
          </div>
          <div className="absolute w-[229px] h-[50px] top-[845px] left-[68px]">
            <Link to="/entrepeneur">
              <Button
                variant="outline"
                className="relative w-[230px] h-[53px] -top-0.5 -left-0.5 rounded-[10px] border-[3px] border-solid border-white"
              >
                <span className="absolute top-2.5 left-[52px] font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] text-center tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                  Check it out
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
