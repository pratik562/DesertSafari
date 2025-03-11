"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ReviewCard from "@/components/ReviewCard"; // Importing the reusable ReviewCard component
import { testimonialsData } from "@/utils/dummyData";

export default function CustomerReview() {
  const sliderRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for Auto Scrolling
    const ctx = gsap.context(() => {
      gsap.to(sliderRef.current, {
        xPercent: -100,
        duration: 30, // Faster, smoother scrolling
        repeat: -1,
        ease: "none",
      });
    }, sliderRef);

    return () => ctx.revert(); // Clean up GSAP context on unmount
  }, []);

  return (
    <section
      className="relative w-full bg-gradient-to-b from-gray-800 to-gray-900 text-white overflow-hidden py-16"
    >
      <h2 className="text-4xl font-extrabold text-center mb-10">
        What Our Clients Say
      </h2>

      {/* Slider Container */}
      <div
        className="relative flex gap-10 w-max items-center"
        ref={sliderRef}
      >
        {testimonialsData.map(({ name, feedback, image }, index) => (
          <ReviewCard
            key={index}
            image={image}
            title={name}
            description={feedback}
            footer="Verified Client"
          />
        ))}

        {/* Duplicate testimonials for seamless scroll */}
        {testimonialsData.map(({ name, feedback, image }, index) => (
          <ReviewCard
            key={`${index}-duplicate`}
            image={image}
            title={name}
            description={feedback}
            footer="Verified Client"
          />
        ))}
      </div>
    </section>
  );
}
