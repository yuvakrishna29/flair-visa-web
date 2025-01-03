import React, { useEffect } from "react";
import Aos from "aos"; // Importing AOS for scroll animations
import "aos/dist/aos.css"; // Import the AOS styles

const Heading = ({ number, text, subtext }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // Initialize AOS when the component mounts
  }, []);

  return (
    <div className="flex flex-col">
      {/* Number on the left with AOS animation */}
      <div
        className="text-subtext_color/50 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold -mb-1"
        data-aos="fade-up" // Animate number with fade-up
        data-aos-delay="200" // Delay for the number to appear first
      >
        {number}
      </div>

      {/* Heading text with AOS animation */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold -mr-2"
        data-aos="fade-up" // Animate heading text with fade-up
        data-aos-delay="400" // Delay for the heading to appear after the number
      >
        {text}
      </h2>

      {/* Subtext with AOS animation */}
      <p
        className="text-sm md:text-base lg:text-lg text-subtext_color/50 font-normal mt-2"
        data-aos="fade-up" // Animate subtext with fade-up
        data-aos-delay="600" // Delay for the subtext to appear last
      >
        {subtext}
      </p>
    </div>
  );
};

export default Heading;
