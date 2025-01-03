import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import { OurBranches } from "../../constants/OurBranches";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Heading from "../../components/Heading";
import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurBranchesSlide = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value to control the scroll speed
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth", // Smooth scrolling
        });
      } else {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth", // Smooth scrolling
        });
      }
    }
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <div className="py-12 px-6 md:px-2 overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between w-full">
          <Heading
            number={"02"}
            text={"Visit our offices around the globe"}
            subtext={
              "Find our branches worldwide and connect with us for personalized assistance, wherever you are."
            }
          />
          <div
            className="flex justify-center gap-4"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <button
              onClick={() => handleScroll("left")}
              className="text-primary_color text-2xl p-5 border border-primary_color rounded-full"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="text-white text-2xl p-5 border bg-primary_color rounded-full"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto py-4 space-x-6 scrollbar-hidden snap-x snap-mandatory"
      >
        {OurBranches.map((branch, index) => (
          <a
            href={branch.mapLink}
            target="_blank"
            key={index}
            className="flex-shrink-0 w-80 sm:w-72 md:w-96 lg:w-80 bg-white rounded-lg shadow-md snap-start"
            data-aos="fade-up" // AOS animation added
            data-aos-delay={index * 200}
          >
            {/* Card Image */}
            <img
              src={branch.image}
              alt={`Branch in ${branch.state}`}
              className="w-full h-48 object-cover rounded-t-lg"
              // data-aos="zoom-in" // Add zoom-in animation to image
            />

            {/* Card Content */}
            <div className="p-4 space-y-4">
              {/* Country */}
              <h3 className="text-xl font-semibold">{branch.city}</h3>

              {/* Address */}
              <p className="text-sm text-gray-600 mt-2 flex items-center">
                <HiOutlineLocationMarker className="h-5 w-5 text-primary_color" />
                <span className="ml-2 text-slate-900">{branch.address}</span>
              </p>

              {/* Phone Number */}
              <a
                href={`tel:${branch.phone}`}
                className="text-sm text-blue-600 mt-2 flex items-center"
              >
                <HiOutlinePhone className="h-5 w-5 text-primary_color" />
                <span className="ml-2 text-slate-900">{branch.phone}</span>
              </a>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurBranchesSlide;
