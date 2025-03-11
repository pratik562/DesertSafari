'use client'

import Image from "next/image";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-primary-bg border border-gray-200 rounded-xl shadow-md shadow-gray-500 hover:shadow-black hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="flex justify-center">
        <Image
          src={service.thumbnail}
          alt={service.name}
          className="rounded-md object-contain h-[200] w-full"
        />
      </div>
      <div className="p-2">
      <h3 className="mt-3 text-lg font-semibold text-secondary">{service.name}</h3>
      <p className="text-sm text-secondary">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
