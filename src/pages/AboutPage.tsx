import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Profile Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">About me</h1>
        
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          <div className="w-full md:w-2/3">
            <p className="text-gray-800 mb-4">I'm a UX designer based in Perth, Australia.</p>
            <p className="text-gray-800">
              Since 2015, I enjoy developing intuitive interfaces basically. I love making people's lives easy. 
              When I'm not designing, you'll find me cooking, thinking a business idea, at the gym or playing video games.
            </p>
          </div>
          
          <div className="w-full md:w-1/3">
            <img 
              src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg" 
              alt="Profile" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-5 gap-4 mb-16">
          <img 
            src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg" 
            alt="Gallery 1" 
            className="w-full h-24 object-cover rounded-lg"
          />
          <img 
            src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg" 
            alt="Gallery 2" 
            className="w-full h-24 object-cover rounded-lg"
          />
          <img 
            src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg" 
            alt="Gallery 3" 
            className="w-full h-24 object-cover rounded-lg"
          />
          <img 
            src="https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg" 
            alt="Gallery 4" 
            className="w-full h-24 object-cover rounded-lg"
          />
          <div className="w-full h-24 bg-gray-100 rounded-lg"></div>
        </div>

        {/* Designer & Entrepreneur Split */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Part Designer</h2>
            <ul className="space-y-2">
              <li>UX design</li>
              <li>UI design</li>
              <li>Marketing</li>
              <li>Community manager</li>
              <li>Web design</li>
              <li>Graphic design</li>
              <li>IT Support</li>
              <li>HTML / CSS</li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Part Entrepreneur</h2>
            <ul className="space-y-2">
              <li>Running businesses</li>
              <li>Delivery app 50k+ Downloads</li>
              <li>Ice cream and printing company</li>
              <li>Ice cream company</li>
              <li>Youtube +50k Subscribers</li>
              <li>E-commerce</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span>Web Design</span>
                <span>Expert</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Graphic Design</span>
                <span>Expert</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-red-400 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Community Manager</span>
                <span>Proficient</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-orange-400 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Entrepreneur</span>
                <span>Expert</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-black h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Gym</span>
                <span>Proficient</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Video Games</span>
                <span>Familiar</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-yellow-300 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;