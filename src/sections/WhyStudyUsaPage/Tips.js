import React, { useEffect, useState, useRef } from "react";
import { Tips } from "../../constants/study_abroad_data/USA/Tips"; // Assuming this is an array of step data
import Description from "../../constants/description";
import Heading from "../../components/Heading";
import "aos/dist/aos.css"; // Import AOS styles if needed
import TipsImage from "../../assets/howew.png";

const StepperWithImage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false); // Track if steps are completed
  const [isVisible, setIsVisible] = useState(false); // Track if section is visible
  const sectionRef = useRef(null); // Reference to the section

  // Intersection Observer to track visibility of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null, // Default to viewport
        threshold: 0.1, // Trigger when 10% of the section is visible
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

  // Auto progress through the steps when the section is visible
  useEffect(() => {
    if (!isVisible || completed) return; // Only start animation if visible and not completed

    const interval = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep < Tips.length - 1) {
          return prevStep + 1;
        }
        clearInterval(interval); // Stop when we reach the last step
        setCompleted(true); // Mark the steps as completed
        return prevStep;
      });
    }, 1500); // Change step every 1.5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [isVisible, completed]);

  // Reset the stepper after completion
  useEffect(() => {
    if (completed) {
      setTimeout(() => {
        setCurrentStep(0); // Reset steps to the first one
        setCompleted(false); // Reset completed flag
      }, 5000); // Delay before resetting
    }
  }, [completed]);

  return (
    <section ref={sectionRef} className="py-8 px-6 md:px-2">
      <Heading
        number={"05"}
        text={"Tips to Enhance Chances of Admission"}
        subtext={"The commonly accepted tests include:"}
        className="z-10 mb-4 sm:mb-8 text-center sm:text-left"
      />
      <div className="flex flex-col px-6 py-10 sm:px-20 sm:py-10 ">
        <div className="w-full flex items-center justify-between"></div>
        <div className="relative mt-8 sm:mt-10 flex flex-col items-center sm:items-start w-full max-w-screen-xl">
          <div className="flex flex-col sm:flex-row w-full items-center sm:justify-evenly">
            {/* Step Content */}
            <div
              className="w-full sm:w-2/3 flex flex-col items-center sm:items-start"
              data-aos="fade-up"
            >
              {Tips.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-start relative pb-12 w-full transition-all duration-1000 ease-in-out ${
                    index === currentStep || completed
                      ? "opacity-100"
                      : "opacity-50"
                  }`}
                >
                  {/* Vertical Connecting Line */}
                  {index !== Tips.length - 1 && (
                    <div
                      className={`absolute left-[20px] top-[20px] h-full ${
                        index < currentStep
                          ? "border-primary_color"
                          : "border-gray-0"
                      } border-l-2`}
                    ></div>
                  )}

                  {/* Step Circle */}
                  <div className="relative flex items-center justify-center">
                    <div
                      className={`w-10 h-10 rounded-full border-2 ${
                        index <= currentStep
                          ? "border-primary_color border-dashed"
                          : "border-gray-0"
                      } flex items-center justify-center`}
                    >
                      <div
                        className={`w-5 h-5 ${
                          index <= currentStep
                            ? "bg-primary_color"
                            : "bg-gray-0"
                        } rounded-full flex items-center justify-center`}
                      >
                        {index <= currentStep && (
                          <span className="text-white text-sm font-bold">
                            ✓
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="ml-8 w-full">
                    <h3
                      className={`text-xl font-semibold transition-opacity duration-1000 ${
                        index === currentStep || completed
                          ? "opacity-100 text-black"
                          : "opacity-30"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <Description
                      text={step.description}
                      className={`transition-opacity duration-1000 ${
                        index === currentStep || completed
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Static Image Section */}
            <div className="w-full sm:w-1/2 justify-center items-center p-10 mt-8 sm:mt-0 hidden md:flex">
              <div className="transition-opacity duration-1000 ease-in-out">
                {/* Replace this with the static image you'd like to use */}
                <img
                  src={TipsImage} // Path to your static image
                  alt="How We Work"
                  className="w-full object-cover" // Ensure the image fits within the container
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepperWithImage;
