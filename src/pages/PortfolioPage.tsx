import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Zpedidos',
    imageUrl: 'https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg',
    logoColor: 'bg-red-500',
    textColor: 'text-gray-800'
  },
  {
    id: 2,
    title: 'Aayra',
    imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
    logoColor: 'bg-white',
    textColor: 'text-gray-800'
  },
  {
    id: 3,
    title: 'Zrepartidores',
    imageUrl: 'https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg',
    logoColor: 'bg-red-500',
    textColor: 'text-gray-800'
  },
  {
    id: 4,
    title: 'PMI WA',
    imageUrl: 'https://images.pexels.com/photos/5632405/pexels-photo-5632405.jpeg',
    logoColor: 'bg-purple-600',
    textColor: 'text-gray-800'
  },
  {
    id: 5,
    title: 'Smitocap',
    imageUrl: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg',
    logoColor: 'bg-cyan-500',
    textColor: 'text-gray-800'
  },
  {
    id: 6,
    title: 'Zgestion',
    imageUrl: 'https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg',
    logoColor: 'bg-red-500',
    textColor: 'text-gray-800'
  },
  {
    id: 7,
    title: 'Tentactacle',
    imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
    logoColor: 'bg-teal-600',
    textColor: 'text-gray-800'
  },
  {
    id: 8,
    title: 'Qaway',
    imageUrl: 'https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg',
    logoColor: 'bg-blue-500',
    textColor: 'text-gray-800'
  },
  {
    id: 9,
    title: 'Zrestaurant',
    imageUrl: 'https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg',
    logoColor: 'bg-red-500',
    textColor: 'text-gray-800'
  },
  {
    id: 10,
    title: 'Rude Glasses',
    imageUrl: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg',
    logoColor: 'bg-gray-800',
    textColor: 'text-gray-800'
  },
  {
    id: 11,
    title: 'Sydney Clothes',
    imageUrl: 'https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg',
    logoColor: 'bg-white',
    textColor: 'text-gray-800'
  }
];

const PortfolioPage: React.FC = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              imageUrl={project.imageUrl}
              logoColor={project.logoColor}
              textColor={project.textColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;