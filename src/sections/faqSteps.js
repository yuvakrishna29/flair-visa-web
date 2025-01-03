import React, { useState, useEffect, useRef } from "react";
import { data } from "../constants/faqdata";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
    const { countries, questions } = data;
    const [selectedCountry, setSelectedCountry] = useState("Australia");
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const scrollRef = useRef(null); // Reference for auto-scrollable container

    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Initialize AOS

        const interval = setInterval(() => {
            if (scrollRef.current) {
                const scrollWidth = scrollRef.current.scrollWidth;
                const clientWidth = scrollRef.current.clientWidth;
                const currentScrollPosition = scrollRef.current.scrollLeft;

                // Reset scroll to start if at the end
                if (currentScrollPosition + clientWidth >= scrollWidth - 1) {
                    scrollRef.current.scrollLeft = 0;
                } else {
                    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
                }
            }
        }, 3000); // Auto-scroll every 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const toggleQuestion = (index) => {
        setExpandedQuestion(expandedQuestion === index ? null : index);
    };

    const filteredQuestions = questions.filter(
        (item) => item.country === selectedCountry
    );

    return (
        <div className="flex flex-col md:flex-row h-auto  bg-white mb-10 mt-20 rounded-[14px] shadow-lg">
            {/* Sidebar */}
            <aside
                className="w-full md:w-1/4 lg:w-1/5 bg-white border-b md:border-r border-gray-200 rounded-[14px] shadow-md"
                ref={scrollRef} // Assign scrollRef to enable auto-scrolling
            >
                <ul
                    className="flex md:flex-col flex-row gap-3 p-4 overflow-x-auto scrollbar-hide"
                    data-aos="fade-right"
                >
                    {countries.map((country) => (
                        <li
                            key={country}
                            className={`cursor-pointer px-4 py-2 rounded-md text-sm md:text-xs lg:text-base font-medium whitespace-nowrap ${
                                selectedCountry === country
                                    ? "bg-primary_color text-white"
                                    : "hover:bg-gray-200 text-gray-700"
                            }`}
                            onClick={() => setSelectedCountry(country)}
                        >
                            {country}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-8 shadow-md">
                <h2
                    className="text-center font-inter text-2xl md:text-4xl font-normal leading-6 text-gray-300 mb-10"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Questions About {selectedCountry}
                </h2>

                <div className="space-y-5 ml-10">
                    {filteredQuestions.length > 0 ? (
                        filteredQuestions.map((item, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-300 pb-4 cursor-pointer shadow-sm"
                                onClick={() => toggleQuestion(index)}
                                data-aos="zoom-in-up"
                                data-aos-delay={`${index * 300}`}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-sm md:text-base font-semibold text-gray-800 break-words flex-grow">
                                        {item.question}
                                    </h3>
                                    <div
                                        className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-primary_color text-primary_color ml-4 shrink-0"
                                        style={{ fontSize: "16px" }}
                                    >
                                        {expandedQuestion === index ? "−" : "+"}
                                    </div>
                                </div>
                                {expandedQuestion === index && item.answer && (
                                    <p className="text-sm text-gray-600 mt-2 break-words">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-gray-600 mt-2">
                            No questions available for {selectedCountry}.
                        </p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;




