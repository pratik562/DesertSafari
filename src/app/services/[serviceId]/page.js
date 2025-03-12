"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { majorServices } from "@/utils/dummyData";
import Button from "@/components/Button";
import { ArrowBack } from "@mui/icons-material";

const dummyYouTubeLinks = [
  "https://www.youtube.com/embed/FKA5NxSRGYg",
  "https://www.youtube.com/embed/Uu2_AO6Ozlw",
  "https://www.youtube.com/embed/ElTnmgAAGaY",
  "https://www.youtube.com/embed/5PvXTyaa2aw", // Note: Shorts can also use the embed URL.
  "https://www.youtube.com/embed/G9WkWsm9wcY",
  "https://www.youtube.com/embed/ctp5OV8t8Oo",
];

export default function SolarServiceDetails() {
  const router = useRouter();
  const { serviceId } = useParams();

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [service, setService] = useState(null);

  useEffect(() => {
    const foundService = majorServices.find(
      (s) => s.id.toString() === serviceId?.toString()
    );
    setService(foundService);
  }, [serviceId]);

  useEffect(() => {
    if (!service) return;

    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "back.out(1.7)",
    });
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-secondary">Service Not Found</h1>
        <Button
          label="Go Back"
          onClick={() => router.push("/services")}
          className="mt-6 bg-primary text-white px-4 py-2 rounded-lg hover:opacity-1 transition"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-200">
      {/* Header with Back Button */}
      <div className="w-full bg-gradient-to-r from-primary to-amber-300 p-4 flex items-center shadow-md">
        <button
          onClick={() => router.push("/#about")}
          className="flex items-center gap-2 text-secondary font-semibold text-lg"
        >
          <ArrowBack fontSize="medium" />
          Back
        </button>
        <h1 className="text-secondary text-2xl font-bold mx-auto">
          {service.title}
        </h1>
      </div>

      {/* Service Details */}
      <div ref={containerRef} className="container mx-auto px-6 py-10">
        <div className="relative bg-home p-8 rounded-3xl shadow-xl flex flex-col md:flex-row gap-8">
          {/* Overlay */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))",
            }}
          ></div>

          <div
            className="relative w-full md:w-1/2"
            style={{
              clipPath:
                "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
              border: "2px solid #ddd",
            }}
          >
            <Image
              ref={imageRef}
              src={service.image}
              alt={service.title}
              className="rounded-md object-cover h-full w-full"
              loading="lazy"
            />
          </div>

          <div className="relative flex-1">
            <h2 className="text-4xl font-extrabold text-primary-text">
              {service.title}
            </h2>
            <p className="text-lg text-secondary-text mt-4 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </div>

      {/* YouTube Video Rendering */}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-secondary mb-6">
          Watch Related Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyYouTubeLinks.map((link, index) => (
            <div
              key={index}
              className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md"
            >
              <iframe
                src={link}
                title={`YouTube video ${index + 1}`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
