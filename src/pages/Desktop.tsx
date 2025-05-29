import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white w-full">
      <div className="bg-white w-full relative">
        {/* Hero Section - Designer & Entrepreneur */}
        <div className="w-full relative bg-[#FDF8EF] py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              {/* Left text */}
              <div className="w-1/3 text-left">
                <h2 className="text-4xl md:text-6xl font-[700] font-['system-ui'] text-black">DESIGNER</h2>
              </div>
              
              {/* Center image */}
              <div className="w-1/3 flex justify-center">
                <img
                  src="/Design entrepeneur.png"
                  alt="Designer and Entrepreneur"
                  className="w-full max-w-[400px]"
                />
              </div>
              
              {/* Right text */}
              <div className="w-1/3 text-right">
                <h2 className="text-4xl md:text-6xl font-[700] font-['system-ui'] text-black">ENTREPRENEUR</h2>
              </div>
            </div>
          </div>
        </div>

        {/* UX Design Portfolio Section */}
        <div className="w-full bg-[#f9bf3b] py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  UX Design<br />Portfolio
                </h2>
                <p className="text-lg mb-6">
                  It is a website about my UX designs. It<br />
                  contains my projects
                </p>
                <Link to="/ux-portfolio">
                  <Button className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#f9bf3b] px-8 py-3 rounded-lg">
                    Check it out
                  </Button>
                </Link>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-full max-w-[400px] h-[400px] flex items-center justify-center">
                  <img
                    src="/phone-food-1.png"
                    alt="UX Design Portfolio"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Graphic Designs Portfolio Section */}
        <div className="w-full bg-[#ff6b6b] py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-full max-w-[400px] h-[400px] flex items-center justify-center space-x-4">
                  <img
                    src="/MOTO.png"
                    alt="Moto Delivery"
                    className="w-[45%] h-auto object-contain transform translate-y-4"
                  />
                  <img
                    src="/BICYCLE.png"
                    alt="Bike Delivery"
                    className="w-[45%] h-auto object-contain transform -translate-y-4"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Graphic Designs<br />Portfolio
                </h2>
                <p className="text-lg mb-6">
                  It is a website about my Graphic Designs. It<br />
                  contains my projects
                </p>
                <Link to="/portfolio">
                  <Button className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#ff6b6b] px-8 py-3 rounded-lg">
                    Check it out
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Entrepreneur Resume Section */}
        <div className="w-full bg-[#202124] py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Entrepreneur<br />Resume
                </h2>
                <p className="text-white text-lg mb-6">
                  It is a website about my companies.
                </p>
                <Link to="/entrepeneur">
                  <Button className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#202124] px-8 py-3 rounded-lg">
                    Check it out
                  </Button>
                </Link>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-full max-w-[400px] h-[400px] flex items-center justify-center">
                  <img
                    src="/RocketMan.png"
                    alt="Entrepreneur"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Let's Connect Section */}
        
      </div>
    </div>
  );
};

export default Desktop;
