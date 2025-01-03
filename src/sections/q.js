
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../assets/OBJECTS.jpg";

const AbroadEducationBanner = () => {
    useEffect(() => {
        AOS.init({ 
            duration: 1200, // Animation duration
            offset: 120,    // Trigger when the element is 120px from the viewport
            once: false,    // Allow animations every time you scroll back to the element
        });
    }, []);

    return (
        <div
        className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg p-8 h-auto mx-auto mb-10 shadow-lg"
        data-aos="fade-up"
    >
        {/* Question Mark Image */}
        <div
            className="hidden md:block flex-shrink-0 mb-6 md:mb-0"
            data-aos="fade-right"
        >
            <img
                src={img}
                alt="Question Mark"
                className="w-32 h-32 object-contain"
            />
        </div>
    
        {/* Text Content */}
        <div
            className="flex-1 px-6 mb-6 md:mb-0"
            data-aos="fade-left"
        >
            <p className="text-blue-700 font-semibold text-lg sm:text-sm mb-2">
                Not Sure Where to Begin?
            </p>
            <h2 className="text-blue-700 font-bold text-2xl sm:text-lg md:text-xl">
                Want to know more about Abroad Education?
            </h2>
        </div>
    
        {/* Button */}
        <button
            className="bg-primary_color text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition shadow-lg"
            data-aos="zoom-in"
        >
            Get Free Counseling
        </button>
    </div>
    
    
    );
};

export default AbroadEducationBanner;
