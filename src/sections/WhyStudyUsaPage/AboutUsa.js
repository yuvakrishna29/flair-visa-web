import React, { useEffect, useState, useRef } from "react";
import Heading from "../../components/Heading";
import { StudyUSaDetails } from "../../constants/study_abroad_data/USA/AboutUSA_data"; // Import the data
import CountUp from "react-countup";
import Aos from "aos"; // Importing AOS
import "aos/dist/aos.css"; // Import the AOS styles

const AboutUsa = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false); // To track section visibility
  const sectionRef = useRef(null); // Reference to the section for visibility tracking

  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // Initialize AOS animations

    // Intersection Observer to track visibility of the section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true); // Set visible when section is in the viewport
        }
      },
      {
        root: null, // Default to viewport
        threshold: 0.4, // Trigger when 40% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="py-8 px-6 md:px-2" ref={sectionRef}>
      {/* Heading Section */}
      <Heading
        number={"02"}
        text={"About USA"}
        subtext={
          "The United States offers unmatched opportunities for academic, personal, and professional growth through its diverse culture and top-ranked universities."
        }
      />

      {/* Details Section */}
      <div className="mt-6 flex flex-wrap lg:flex-nowrap justify-center gap-6">
        {StudyUSaDetails.map((detail, index) => (
          <div
            key={index}
            className="relative flex items-center  space-x-4 bg-gray-100 shadow-md p-10 rounded-lg w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-0.75rem)]"
            data-aos="fade-up" // Add AOS animation to each item
            data-aos-delay={`${index * 200}`} // Stagger the animations by index
          >
            {/* Icon */}
            <div className="absolute top-5 bg-slate-200 p-3 rounded-full right-10 text-3xl text-blue-500">
              {detail.icon}
            </div>

            {/* Title and Counter */}
            <div>
              {detail.number && (
                <p className="text-slate-700 text-3xl font-medium">
                  {isSectionVisible ? ( // Start count-up only when the section is visible
                    <CountUp
                      start={0}
                      end={detail.number}
                      duration={3}
                      separator=","
                    />
                  ) : (
                    0 // Show 0 until the count-up starts
                  )}
                </p>
              )}
              <h3 className="text-lg text-slate-400 font-normal">
                {detail.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsa;
