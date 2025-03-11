"use client";

import Image from "next/image";
import React from "react";

const ReviewCard = ({ image, title, description, footer }) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-xl overflow-hidden flex flex-col text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300">
      {/* Image Section with Overlay */}
      <div className="relative w-full h-40">
        {image && (
          <Image
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-300 mt-2">{description}</p>
      </div>
      {/* Footer Section */}
      {footer && (
        <div className="bg-gray-700 py-3 text-sm font-medium text-primary">
          {footer}
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
