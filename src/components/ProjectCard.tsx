import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  logoColor: string;
  textColor: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, logoColor, textColor }) => {
  const getProjectPath = (title: string) => {
    return `/portfolio/${title.toLowerCase()}`;
  };

  return (
    <Link to={getProjectPath(title)} className="block">
      <div className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300">
        <div className={`${logoColor} p-8 flex items-center justify-center`}>
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-32 object-contain"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className={`text-lg font-medium ${textColor}`}>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;