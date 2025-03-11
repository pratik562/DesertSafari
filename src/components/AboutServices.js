"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const AboutService = ({ service, index, onLearnMore }) => {
  const serviceRef = useRef(null);

  useEffect(() => {
    if (!serviceRef.current) return;

    gsap.fromTo(
      serviceRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: serviceRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={serviceRef}
      className={`relative flex flex-col sm:flex-row items-center gap-12 py-14 px-8 sm:px-14 rounded-3xl bg-Home bg-cover overflow-hidden 
                transition-transform duration-500 transform hover:scale-105 hover:shadow-xl ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
      style={{
        clipPath: "polygon(6% 0%, 94% 4%, 100% 96%, 94% 100%, 6% 96%, 0% 4%)",
        boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black bg-opacity-60 z-0" />


      {/* Image Section */}
      <div className="relative w-[90%] max-w-[360px] h-[240px] sm:w-[50%] sm:max-w-[500px] sm:h-[320px] flex justify-center items-center z-10">
        <div
          className="absolute w-full h-full bg-gradient-to-r from-primary to-accent rounded-3xl p-[8px]"
          style={{
            clipPath:
              "polygon(6% 0%, 94% 4%, 100% 96%, 94% 100%, 6% 96%, 0% 4%)",
          }}
        >
          <div className="relative w-full h-full bg-primary-text rounded-3xl overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              layout="fill"
              className="object-cover rounded-3xl transform transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="relative text-center sm:text-left max-w-full sm:max-w-[50%] z-10">
        <h3 className="text-3xl sm:text-4xl font-bold text-primary drop-shadow-md">
          {service.title}
        </h3>

        <p className="text-primary-text mt-4 leading-relaxed text-sm sm:text-base md:text-lg opacity-90 drop-shadow-sm">
          {service.shortDescription}
        </p>

        <Button
          label="Learn More"
          onClick={onLearnMore}
          className="mt-6 px-6 py-3 bg-primary text-primary-text font-semibold rounded-lg shadow-lg 
            hover:bg-opacity-1 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default AboutService;
