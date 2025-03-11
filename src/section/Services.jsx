"use client";
import React, { useState, useRef } from "react";
import { ServiceCard } from "@/components";
import { servicesData } from "@/utils/dummyData";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState(
    servicesData.services[0].category
  );
  const sectionRef = useRef(null);
  const buttonsRef = useRef([]);
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );
  }, [selectedCategory]);

  useGSAP(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.15, ease: "power2.out" }
    );
  }, [selectedCategory]);

  return (
    <section ref={sectionRef} id="services" className="py-14 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-8 drop-shadow-xl text-primary text-center">
          Our <span className="text-accent">Activities</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {servicesData.services.map((category, index) => (
            <button
              key={category.category}
              ref={(el) => (buttonsRef.current[index] = el)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold shadow-md transition-all duration-300 
        ${
          selectedCategory === category.category
            ? "bg-primary text-primary-text shadow-lg shadow-secondary"
            : "bg-primary-bg text-secondary border border-secondary hover:bg-yellow-100 hover:text-yellow-700"
        }`}
              onClick={() => setSelectedCategory(category.category)}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services
            .find((cat) => cat.category === selectedCategory)
            .services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <ServiceCard service={service} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
