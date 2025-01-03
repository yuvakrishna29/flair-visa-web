import React, { useRef, useEffect } from "react";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { eventsData } from "../../constants/Events";
import { CiCalendar } from "react-icons/ci";
import Aos from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const Events = () => {
  const scrollRef = useRef(null);

  // Initialize AOS when the component mounts
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 1.5; // Adjust scroll amount based on visible width
      if (direction === "left") {
        scrollRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="py-8 px-6 md:px-2">
      <div className="flex justify-between items-center" data-aos="fade-up">
        <Heading number={"06"} text={"Study abroad events"} />
        <div
          className="hidden md:block"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <Button>See More Events</Button>
        </div>
      </div>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto py-6 scrollbar-hidden snap-x snap-mandatory cursor-pointer"
          data-aos="fade-up"
        >
          {eventsData.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-4 flex-shrink-0 w-56 md:w-64 text-center snap-start flex flex-col"
              data-aos="zoom-in"
              data-aos-delay={index * 200} // Delay each card's animation
            >
              {/* Event Image */}
              <div className="relative mb-4 h-40">
                <img
                  src={event.pic}
                  alt={event.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              {/* Event Title */}
              <h3 className="text-xl font-medium truncate mb-2">
                {event.name}
              </h3>

              {/* Event Date */}
              <p className="text-sm bg-gray-100 p-3 rounded-full mt-2 font-regular flex items-center justify-center gap-2">
                <CiCalendar className="w-5 h-5" />
                {event.date}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={() => scroll("left")}
            className="p-4 border-2 border-primary_color rounded-full text-primary_color hover:border-primary_color/90 hover:text-primary_color"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-4 border-2 bg-primary_color rounded-full text-white hover:bg-primary_color/90"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
