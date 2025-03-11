"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components";
import { bannerVideo, company } from "@/utils/dummyData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counters, setCounters] = useState(company.statistics.map(() => 0));
  const bannerRef = useRef(null);
  const statsRef = useRef([]);
  const router = useRouter();

  useEffect(() => {
    // Rotate banner every 8 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerVideo.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    // Animation for the "info" section
    gsap.fromTo(
      "#info",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // Animation for statistics
    gsap.from(statsRef.current, {
      opacity: 0,
      y: 30,
      stagger: 0.3,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    // Animate content when currentIndex changes
    gsap.fromTo(
      "#content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, [currentIndex]);

  useEffect(() => {
    // Counter animation for statistics
    company.statistics.forEach((stat, index) => {
      gsap.to(statsRef.current[index], {
        duration: 2,
        innerText: stat.value,
        snap: { innerText: 1 },
        ease: "power3.out",
        onUpdate() {
          setCounters((prev) => {
            const updatedCounters = [...prev];
            updatedCounters[index] = Math.round(this.targets()[0].innerText);
            return updatedCounters;
          });
        },
      });
    });
  }, []);

  return (
    <section id="home" className="relative flex flex-col w-full rounded-3xl">
      {/* Banner Section */}
      <div className="relative w-full bg-Home bg-cover bg-center mt-10 rounded-3xl">
        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] overflow-hidden rounded-3xl">
          <video
            key={currentIndex}
            playsInline
            preload="auto"
            ref={bannerRef}
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          >
            <source src={bannerVideo[currentIndex]?.videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>
          <div
            id="content"
            className="absolute inset-0 flex flex-col items-center justify-center text-center text-primary-text px-6 opacity-0"
          >
            <h2 className="text-3xl sm:text-5xl font-bold">
              {bannerVideo[currentIndex]?.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg max-w-3xl">
              {bannerVideo[currentIndex]?.description}
            </p>
            <Button
              onClick={() => router.push(bannerVideo[currentIndex]?.link)}
              label={bannerVideo[currentIndex]?.buttonText}
              className="bg-primary px-5 sm:px-6 py-2 sm:py-3 text-secondary font-semibold rounded-lg hover:bg-opacity-50 hover:text-slate-gray transition duration-300 shadow-md my-5"
            />
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerVideo.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125 opacity-100"
                  : "bg-primary-text opacity-75"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Information Section */}
      <div
        id="info"
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 opacity-0"
      >
        <p className="text-base sm:text-lg text-secondary font-medium">
          {company?.tagline}
        </p>
        <h1 className="mt-4 font-palanquin text-[clamp(2rem,5vw,3rem)] font-bold">
          <span className="text-secondary">Welcome to</span>
          <br />
          <span className="text-primary inline-block mt-2">
            {company?.name}
          </span>
        </h1>
        <p className="text-sm sm:text-lg mt-4 mb-6 max-w-md md:max-w-lg">
          {company?.description}
        </p>
        <Button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          label="Contact Us"
          className="bg-primary px-6 py-3 text-primary-text rounded-lg hover:bg-secondary transition duration-300 shadow-md"
        />
        
        <div className="flex flex-wrap w-[800] mt-12 justify-between ">
          {company.statistics.map(({ label, icon }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-32 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 transition-transform transform hover:scale-110 hover:shadow-2xl hover:-translate-y-2 p-5"
            >
              <div className="mb-3">{icon}</div>
              <p
                ref={(el) => (statsRef.current[index] = el)}
                className="text-2xl font-bold"
              >
                {counters[index]}
              </p>
              <p className="text-sm mt-2 text-secondary">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
