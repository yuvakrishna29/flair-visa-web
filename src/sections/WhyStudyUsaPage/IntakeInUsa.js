import React from "react";
import Heading from "../../components/Heading";
import { Intake } from "../../constants/study_abroad_data/USA/Intake";
import { CiCalendar } from "react-icons/ci";

const IntakeInUsa = () => {
  return (
    <div className="py-8 px-6 md:px-2">
      <Heading
        number={"04"}
        text={"Intakes in the USA"}
        subtext={
          "The academic calendar in the USA offers three main intakes: Fall, Spring, and Summer."
        }
      />
      <div className="py-8">
        {/* Card Grid Layout */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6 items-center justify-center cursor-pointer">
          {Intake.map((take, index) => (
            <div
              key={index}
              className="bg-white w-[400px] border rounded-lg shadow-lg p-6 flex flex-col space-y-4 hover:shadow-2xl transition-shadow duration-500"
              data-aos="zoom-in"
              data-aos-delay={index * 200} // Delay for each card to appear sequentially
            >
              {/* Image Section */}
              <div className="flex justify-center mb-6">
                <img
                  src={take.intakeImg}
                  alt={take.intakeName}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>

              {/* Intake Information */}
              <div className="flex flex-col gap-4">
                {/* Intake Name and Date */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800 truncate">
                    {take.intakeName}
                  </h3>
                  <div className="flex items-center gap-3 bg-gray-100 border-slate-300 border p-2 rounded-full">
                    <CiCalendar className="h-5 w-5 text-slate-400" />
                    <p className="text-md text-slate-400">{take.date}</p>
                  </div>
                </div>

                {/* Subtext */}
                <p className="text-sm text-gray-500">{take.intakeSubtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntakeInUsa;
