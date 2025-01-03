import React, { useState, useEffect } from "react";
import { faqData } from "../../constants/Faq";
import Aos from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Initialize AOS when the component mounts
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-8 px-6 md:px-8 lg:px-16 w-full">
      <div
        className="flex flex-col lg:flex-row items-center justify-center bg-white shadow-xl rounded-lg mx-auto w-full md:full lg:w-full p-6"
        data-aos="fade-up"
      >
        {/* Heading Section */}
        <div className="text-center mb-8 flex-1" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-gray-800">
            You ask - we answer.
          </h2>
          <p className="text-gray-500 mt-2">
            All you want to know about the product.
          </p>
        </div>

        {/* FAQ Dropdown Section */}
        <div className="space-y-2 w-full flex-1">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg p-4"
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Stagger animation for each FAQ item
            >
              {/* Question */}
              <div
                onClick={() => toggleFAQ(index)}
                className="flex flex-row justify-between items-center cursor-pointer  "
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-700 ">
                  {item.question}
                </h3>
                <span className="text-primary_color text-2xl mt-2 md:mt-0">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>

              {/* Answer */}
              <div
                className={`mt-3 text-gray-600 text-sm overflow-hidden transition-all duration-1000 ease-in-out ${
                  activeIndex === index ? "max-h-11" : "max-h-0"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
