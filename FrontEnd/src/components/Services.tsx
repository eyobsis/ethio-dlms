import React from 'react';
import ServiceCard from './ServiceCard';
import { FaRegIdCard, FaRegCalendarAlt, FaRegBuilding, FaRegClipboard, FaRegFileAlt } from 'react-icons/fa';

const Services: React.FC = () => {
  const services = [
    {
      title: 'New License',
      description: 'You can apply for a new license once you create an account and upload all the relevant required documents. You will be notified what documents are needed once you register.',
      icon: <FaRegIdCard className="text-blue-500" size={40} />
    },
    {
      title: 'Renew License',
      description: 'You can apply to renew your license once you create an account and upload all the relevant required documents. You will be notified what documents are needed once you register.',
      icon: <FaRegIdCard className="text-green-500" size={40} />
    },
    {
      title: 'Online Study Materials and Payments',
      description: 'We will upload some model papers and answers that are similar to the written exam to prepare you for the exam. You can pay the required amounts online through our system.',
      icon: <FaRegFileAlt className="text-purple-500" size={40} />
    },
    {
      title: 'Exam Scheduling',
      description: 'You will be scheduled for the written exam and trial exam through our system, and you can view it once it is done.',
      icon: <FaRegCalendarAlt className="text-yellow-500" size={40} />
    },
    {
      title: 'Driving Schools',
      description: 'You can view the available registered driving schools (learners) through our system once you apply for a new license.',
      icon: <FaRegBuilding className="text-red-500" size={40} />
    },
    {
      title: 'License Issuing',
      description: 'We will send your temporary license once you pass the written exam through our system. We will inform you to collect your new driving license or renewed license once it is ready.',
      icon: <FaRegClipboard className="text-teal-500" size={40} />
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 p-4">
      {services.map((service, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
          <ServiceCard
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        </div>
      ))}
    </div>
  );
};

export default Services;
