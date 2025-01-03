import React from "react";
import { UsaBestUniversities } from "../../constants/study_abroad_data/USA/BestUniversities"; // Import the university data
import Heading from "../../components/Heading";

const BestUniversitiesInUsa = () => {
  // Filter only universities from the United States

  return (
    <div className="py-8 px-6 md:px-2">
      <Heading
        number={"03"}
        text={"Best Universities in the USA"}
        subtext={
          "Home to prestigious universities known for academic excellence, research opportunities, and vibrant campus life."
        }
      />

      {/* University Cards Container */}
      <div className="flex justify-center items-center mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {UsaBestUniversities.map((university, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 200} // Delay for each card to appear sequentially
            >
              {/* Logo */}
              <div className="flex justify-center mb-4">
                <img
                  src={university.logo}
                  alt={`${university.name} Logo`}
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* University Name */}
              <h3 className="text-xl font-semibold mb-2 truncate">
                {university.name}
              </h3>

              {/* University Country */}
              <p className="text-md text-gray-600 break-words">
                {university.country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestUniversitiesInUsa;
