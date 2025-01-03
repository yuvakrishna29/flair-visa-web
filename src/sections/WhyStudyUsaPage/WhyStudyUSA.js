import React, { useEffect } from "react";
import Heading from "../../components/Heading";
import USASectionImage from "../../assets/SectionImages/WhyStudyUSA/usa_secion.png";
import Aos from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const WhyStudyUSA = () => {
  // Initialize AOS
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // Ensure AOS only animates once
  }, []);

  return (
    <div className="py-8 px-6 md:px-2">
      <div className="flex flex-wrap items-center justify-between">
        {/* Text Section */}
        <div
          className="w-full md:w-1/2 mb-4 md:mb-0"
          data-aos="fade-right" // Apply AOS animation
        >
          <Heading number={"01"} text={"Why Study in USA?"} />
          <p
            className="mt-4 lg:w-3/4 text-justify text-subtext_color"
            data-aos="fade-up" // Apply AOS animation
          >
            The USA is home to some of the world’s most prestigious
            universities, offering a diverse range of programs and cutting-edge
            research opportunities. With a strong emphasis on innovation and
            critical thinking, students gain valuable knowledge and practical
            experience. The country’s dynamic academic environment encourages
            collaboration, helping students build global networks that enhance
            their future career prospects. Studying in the USA not only expands
            your skill set but also immerses you in a multicultural setting,
            preparing you for success in a rapidly changing world.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="w-full md:w-1/2 hidden md:block"
          data-aos="fade-left" // Apply AOS animation
        >
          <img
            src={USASectionImage}
            alt="Why Study in USA"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyStudyUSA;
