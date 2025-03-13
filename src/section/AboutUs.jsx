"use client";

import { AboutService, AboutusCard } from "@/components";
import { AboutDoctors, FounderDetails, majorServices } from "@/utils/dummyData";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { logo1, logo2 } from "@/assests";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutUs() {
  const router = useRouter();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="flex justify-center items-center flex-col opacity-0 "
    >
      {/* About Section */}
      <div className="flex flex-col items-center text-center gap-6 mt-10">
        <Image
          src={logo1}
          alt="Emirates Desert Safari Logo"
          width={200}
          height={100}
          priority
          className="object-contain"
        />

        <h2 className="font-palanquin font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
          About{" "}
          <span className="text-primary drop-shadow-lg">
            Emirates Desert Safari
          </span>
        </h2>

        <p className="text-base sm:text-lg text-secondary max-w-md sm:max-w-2xl leading-relaxed">
          At{" "}
          <span className="text-primary font-semibold">
            Emirates Desert Safari
          </span>
          , we offer exhilarating desert adventures that combine the thrill of
          dune bashing, the charm of camel rides, and the beauty of breathtaking
          sunsets. Enjoy a delicious BBQ dinner and mesmerizing live
          entertainment under the stars, all set against the majestic dunes of
          Dubai.
        </p>
      </div>

     {/* About Major Services */}
     <div className="flex flex-col gap-12 mt-12 w-full ">
        {majorServices.map((service, index) => (
          <AboutService
            key={service.id}
            service={service}
            index={index} // Pass index to control layout
            onLearnMore={() => router.push(`/services/${service.id}`)}
          />
        ))}
      </div>

      {/* Founder Details Section */}
      <div className="my-15 justify-center items-center flex flex-col my-20 ">
        <div>
          <h2 className="font-palanquin font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-center text-secondary">
            Our{" "}
            <span className="text-primary drop-shadow-lg ">Expert Team</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2  sm:gap-14 mt-16">
          {FounderDetails.map((founder, index) => (
            <div
              key={founder.name}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <AboutusCard {...founder} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
