import Link from "next/link";
import React from "react";

const ServiceCard = ({ title, description, path, services }) => {
  return (
    <>
      <div className="bg-gray-900 text-white rounded-lg flex flex-col md:flex-row">
        <div className="flex-1 m-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-gray-400 my-4">{description}</p>
          <Link
            href={`${path}`}
            className="relative w-36 border-2 border-purple-700 text-white px-4 py-2 rounded-lg overflow-hidden transition-all duration-500 ease-in-out
             hover:text-white before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-purple-700 before:z-0
             hover:before:w-full before:transition-all before:duration-500 before:ease-in-out flex items-center justify-center"
          >
            <span className="relative z-10">Explore More</span>
          </Link>
        </div>
        <div className="bg-black p-4 rounded-lg flex flex-col gap-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full">
                {service.icon}
              </div>
              <span>{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
