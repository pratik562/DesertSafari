"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { majorServices } from "@/utils/dummyData";
import Button from "@/components/Button";
import { ArrowBack } from "@mui/icons-material";

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
          onClick={() => router.push('/#about')}
          // onClick={() => router.back()}
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
        <div className="relative bg-Home p-8 rounded-3xl shadow-xl flex flex-col md:flex-row gap-8">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl pointer-events-none"></div>

          {/* Main Content */}
          <div className="relative w-full md:w-1/2"
          style={{
            clipPath: "polygon(10% 0%, 90% 0%, 100% 90%, 90% 100%, 10% 100%, 0% 10%)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
          >
            <Image
              ref={imageRef}
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className="rounded-2xl object-cover"
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
            {service.features && service.features.length > 0 && (
              <div className="mt-8 bg-yellow-100 p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  🌟 Key Features:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-lg font-medium">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
