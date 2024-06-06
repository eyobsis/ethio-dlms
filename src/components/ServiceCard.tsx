import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="font-bold text-xl mb-2 text-center">{title}</div>
      <p className="text-gray-700 text-base text-center">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
