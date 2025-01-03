import React, { useEffect } from "react";
import Heading from "../../components/Heading";
import AboutImg from "../../assets/about.png";
import CountUp from "react-countup"; // Import CountUp
import { ReactCountUp } from "../../constants/CountUp"; // Import ReactCountUp from constants
import Aos from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // Initialize AOS when the component mounts
  }, []);

  return (
    <section className="py-8 px-6 md:px-2">
      {/* Heading with AOS animation */}
      <Heading
        number={"01"}
        text={"About Us"}
        data-aos="fade-up" // Apply fade-up animation for the heading
      />
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Section (Text and CountUp) */}
        <div
          className="w-full lg:w-1/2 text-center lg:text-left px-2 py-2"
          data-aos="fade-up" // Apply fade-up animation to the text section
          data-aos-delay="200" // Delay to make it appear after the heading
        >
          <h1 className="text-5xl">Hello, We are Flairvisa</h1>
          <p className="text-sm sm:text-md md:text-lg text-subtext_color text-justify lg:text-left">
            Choose Flairvisa Abroad Education Consultants for your path to
            success! Our dedicated team provides personalized guidance to
            simplify the complex process of pursuing advanced studies overseas.
            From university selection to visa processing and seamless
            transitions, we offer expert advice tailored to your academic goals.
            Beyond conventional consultancy services, we ensure comprehensive
            support and unwavering commitment to your success. Trust our proven
            track record in shaping successful global academic journeys. Your
            aspirations, our expertise – the perfect combination for achieving
            your dreams.
          </p>

          {/* CountUp Section with AOS animation */}
          <div
            className="p-3 bg-white w-full lg:w-full mt-8 rounded-lg shadow-md"
            data-aos="fade-up" // Apply fade-up animation for the CountUp section
            data-aos-delay="400" // Delay to make it appear after the text
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
              {ReactCountUp.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg flex flex-col relative shadow-sm"
                >
                  {/* Icon in the top-right corner */}
                  <div
                    className={`absolute top-2 right-2 bg-white p-2 rounded-full shadow-md ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  {/* CountUp text */}
                  <div className="flex flex-col justify-start items-start">
                    <h3 className="text-3xl font-semibold text-gray-700">
                      <CountUp
                        start={0}
                        end={item.count}
                        duration={10}
                        separator=","
                        suffix="+"
                      />
                    </h3>
                    <p className="text-md text-gray-500 font-medium mt-2">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div
          className="mt-8 lg:mt-0 w-full lg:w-1/2 text-center hidden lg:block"
          data-aos="fade-left" // Apply fade-left animation for the image section
          data-aos-delay="600" // Delay to make it appear after the CountUp section
        >
          <img
            src={AboutImg}
            alt="About Us"
            className="w-full h-auto object-cover lg:max-w-[600px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
