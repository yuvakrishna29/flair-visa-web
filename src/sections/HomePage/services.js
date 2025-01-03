import React, { useEffect } from "react";
import Heading from "../../components/Heading";
import { studentServices } from "../../constants/StudenServices";
import { FaChevronRight } from "react-icons/fa";
import Aos from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // Initialize AOS when the component mounts
  }, []);

  const firstTwoCards = studentServices.slice(0, 2); // First two cards
  const thirdCard = studentServices.slice(2, 3); // Third card
  const remainingCards = studentServices.slice(3); // Remaining cards

  return (
    <section className="service-cards-container py-8 px-6 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 z-10">
      {/* Title */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 mb-6">
        <Heading
          number={"02"}
          text={"Services of Students"}
          data-aos="fade-up"
        />
      </div>

      {/* First 2 Cards */}
      {firstTwoCards.map((service, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-10 h-full">
            <h2 className="text-xl xl:text-2xl font-semibold mb-4">
              {service.title}
            </h2>
            <div className="flex items-center mb-4 flex-col gap-6">
              <div
                className="rounded-full p-3 flex"
                style={{ backgroundColor: service.icon.backgroundColor }}
              >
                <div className="bg-white rounded-full p-8">
                  <div
                    className="w-12 h-12 rounded-full p-3 flex justify-center items-center text-white"
                    style={{
                      backgroundColor: service.icon.iconBg,
                      boxShadow: `0 4px 6px ${service.icon.iconShadow}`,
                    }}
                  >
                    {service.icon.src}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-gray-600">{service.subText}</p>
                <div className="flex justify-end bg-slate-300 p-4 rounded-full group-hover:bg-primary_color group-hover:text-white transition-all duration-300">
                  <FaChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* 3rd Card (Different Style) */}
      {thirdCard.map((service, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer p-10"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className=" relative border-gray-200 border rounded-2xl p-6 flex flex-col items-center justify-center gap-10 h-full">
            <div
              className=" absolute -top-7 w-12 h-12 rounded-full p-3 flex justify-center items-center text-white "
              style={{
                backgroundColor: service.icon.iconBg,
                boxShadow: `0 4px 6px ${service.icon.iconShadow}`,
              }}
            >
              {service.icon.src}
            </div>
            <h2 className="text-xl xl:text-2xl font-semibold mb-4 text-gray-700">
              {service.title}
            </h2>
            <div className="flex items-center mb-4 flex-col gap-6">
              <div className="flex items-center gap-3">
                <p className="text-gray-500">{service.subText}</p>
              </div>
              <div className="flex items-center text-xs lg:text-base justify-center gap-3 bg-primary_color text-white p-3 rounded-full group-hover:bg-primary_color/90 group-hover:text-white transition-all duration-300">
                Consult with our experts!
                <div className="bg-white p-3 text-primary_color rounded-full">
                  <FaChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Remaining Cards */}
      {remainingCards.map((service, index) => (
        <div
          key={index + 3} // Start key from 3 since first two and third card are already handled
          className="group relative bg-gray-100 border border-gray-300 hover:bg-gray-200 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
          data-aos="fade-up"
          data-aos-delay={(index + 3) * 100}
        >
          <div className="rounded-lg shadow-md p-6 flex flex-col gap-10 h-full">
            <h2 className="text-xl xl:text-2xl font-semibold mb-4 text-gray-700">
              {service.title}
            </h2>
            <div className="flex items-center mb-4 flex-col gap-6">
              <div
                className="rounded-full p-3 flex"
                style={{ backgroundColor: "rgba(200, 200, 200, 0.2)" }}
              >
                <div className="bg-white rounded-full p-8">
                  <div
                    className="w-12 h-12 rounded-full p-3 flex justify-center items-center text-gray-600"
                    style={{
                      backgroundColor: "rgba(150, 150, 150, 0.4)",
                      boxShadow: "0 2px 4px rgba(150, 150, 150, 0.3)",
                    }}
                  >
                    {service.icon.src}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-gray-500">{service.subText}</p>
                <div className="flex justify-end bg-gray-400 p-4 rounded-full group-hover:bg-gray-600 group-hover:text-white transition-all duration-300">
                  <FaChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
