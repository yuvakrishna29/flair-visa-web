import React, { useEffect, useRef } from "react";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { ratingsData } from "../../constants/Rating"; // Ensure the path is correct
import Aos from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const Testimonials = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // Initialize AOS
    const scrollContainer = scrollContainerRef.current;
    const scrollAmount = 400; // Adjust this value to change scroll speed
    let scrollInterval;

    const autoScroll = () => {
      if (scrollContainer) {
        const maxScrollLeft =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

        // Check if we're at the beginning and need to scroll back to the end
        if (scrollContainer.scrollLeft >= maxScrollLeft) {
          scrollContainer.scrollLeft = 0; // Loop back to the first item
        } else {
          scrollContainer.scrollLeft += scrollAmount; // Scroll to the left smoothly
        }
      }
    };

    // Set interval for automatic scrolling
    scrollInterval = setInterval(autoScroll, 3000); // Change 3000ms to control the interval between slides

    return () => {
      clearInterval(scrollInterval); // Cleanup on component unmount
    };
  }, []);

  return (
    <section className="py-8 px-6 md:px-2">
      <div className="flex justify-between items-center" data-aos="fade-up">
        <Heading
          number={"05"}
          text={"What our students say"}
          subtext={
            "Read more student reviews on our Google page and leave your own"
          }
        />
        <div
          className="hidden md:block"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <Button>see More Reviews</Button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex space-x-3 overflow-x-auto py-6 md:space-x-3 scrollbar-hidden scroll-smooth"
        data-aos="fade-up"
      >
        {ratingsData.map((student, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-xl shadow-lg w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-[390px] text-left flex-shrink-0"
            data-aos="zoom-in"
            data-aos-delay={index * 200} // Adding delay to each card animation
          >
            <div className="bg-gray-100 p-3 rounded-lg h-full flex flex-col">
              {/* Rating Section */}
              <div className="mb-4">
                <div className="flex mb-2">
                  {Array.from({ length: 5 }, (_, index) => {
                    const rating = student.rating;
                    return (
                      <span key={index}>
                        {rating >= index + 1 ? (
                          <FaStar className="text-yellow-500" />
                        ) : rating >= index + 0.5 ? (
                          <FaStarHalfAlt className="text-yellow-500" />
                        ) : (
                          <FaRegStar className="text-yellow-500" />
                        )}
                      </span>
                    );
                  })}
                </div>
                <p className="text-md text-gray-600">
                  {student.rating} out of 5
                </p>
                <p className="text-md text-gray-700 mt-4">{student.message}</p>
              </div>

              {/* Content Section above the Photo */}
              <div className="flex-grow" />

              {/* Photo, Name, and University Section at the Bottom */}
              <div className="flex items-center mt-6">
                <img
                  src={student.photo}
                  alt={`${student.name} photo`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{student.name}</h3>
                  <p className="text-sm text-gray-600">{student.university}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
