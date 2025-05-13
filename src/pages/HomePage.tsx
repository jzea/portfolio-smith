import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Split Design */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Designer"
                className="w-full object-cover rounded"
                style={{ filter: "saturate(1.5) contrast(1.1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/40 via-red-500/40 to-purple-500/40 mix-blend-overlay"></div>
              <h2 className="absolute bottom-4 left-4 text-4xl font-bold text-white">
                designer
              </h2>
              <p className="absolute top-4 left-4 text-xs text-white opacity-80">
                I make beautiful websites, and create <br /> unique designs and
                design systems.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8 relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Coder"
                className="w-full object-cover rounded"
              />
              <h2 className="absolute bottom-4 right-4 text-4xl font-bold text-white">
                &lt;coder&gt;
              </h2>
              <p className="absolute top-4 right-4 text-xs text-white text-right opacity-80">
                I write clean, elegant and efficient code <br /> using modern
                web technologies.
              </p>
              <div className="absolute -bottom-10 -right-10 text-xs opacity-50">
                <div>JavaScript</div>
                <div>React</div>
                <div>CSS3/HTML5</div>
                <div>Node.js</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UX Design Portfolio Section */}
      <section className="bg-yellow-400 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-white mb-2">UX Design</h2>
            <h3 className="text-3xl font-bold text-white mb-6">Portfolio</h3>
            <p className="text-black">
              It is a website about my UX designs, it contains my projects
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="UX Design Portfolio"
              className="w-4/5 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Graphic Design Portfolio Section */}
      <section className="bg-red-400 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-12">
            <h2 className="text-4xl font-bold text-white mb-2">
              Graphic Designs
            </h2>
            <h3 className="text-3xl font-bold text-white mb-6">Portfolio</h3>
            <p className="text-white">
              It is a website about my UX designs, it contains my projects
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8391656/pexels-photo-8391656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Graphic Design Portfolio"
                className="w-4/5 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneur Resume Section */}
      <section className="bg-gray-900 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-2">Entrepreneur</h2>
          <h3 className="text-3xl font-bold text-white mb-6">Resume</h3>
          <p className="text-white mb-8">
            It is a website about my UX designs, it contains my projects
          </p>

          <div className="mt-8 text-center">
            <Link
              to="/portfolio"
              className="inline-block px-6 py-3 bg-white text-gray-900 font-bold rounded hover:bg-gray-100 transition"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
