import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import NewsBanner from "../assets/banners/news_banner.png";
import { BeatLoader } from "react-spinners";
import { newsData } from "../constants/NewsUpdates.constance";
import Aos from "aos";
import "aos/dist/aos.css";

const News = () => {
  const countries = [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Germany",
    "New Zealand",
    "European Union",
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default to the first country
  const [loading, setLoading] = useState(false); // Loader state

  // Initialize AOS when the component mounts
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const handleCountryChange = (country) => {
    setLoading(true); // Start loading when country is selected
    setSelectedCountry(country);
    setTimeout(() => {
      setLoading(false); // Stop loading after a brief delay (for the sake of the animation)
    }, 500); // Adjust the delay based on the data processing time
  };

  const filteredNews = newsData.filter(
    (item) => item.country === selectedCountry
  );

  return (
    <main>
      <Banner
        imageSrc={NewsBanner}
        title={"Stay Updated with the Latest News"}
        subtitle={
          "Explore the most recent updates, policies, and trends in international education and visa applications. Stay informed to make your study abroad dreams a reality!"
        }
      />
      <div className="custom_container">
        <section className="relative overflow-hidden py-8 px-6 md:px-8 lg:px-16">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800">
              Latest News & Updates
            </h2>
            <p className="text-gray-500 mt-2">
              Stay updated with the latest news from different countries.
            </p>
          </div>

          {/* Buttons for selecting country */}
          <div
            className="flex xl:justify-center justify-start mb-6 gap-4 overflow-x-auto whitespace-nowrap scrollbar-hidden"
            data-aos="fade-left"
          >
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => handleCountryChange(country)}
                className={`py-2 px-6 border rounded-full ${
                  selectedCountry === country
                    ? "bg-slate-950 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {country}
              </button>
            ))}
          </div>

          {/* Loader */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <BeatLoader color="#0A5CA5" />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {filteredNews.map((item, index) => {
                // Determine if it's the first card
                const isFirstCard = index === 0;

                return isFirstCard ? (
                  // Render the first card with a larger design
                  <div
                    key={index}
                    className="rounded-lg border shadow-md transition-all col-span-1 lg:col-span-3 flex flex-col lg:flex-row items-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Left Section (Image) */}
                    <div className="w-full lg:w-1/2 h-80 lg:h-80 overflow-hidden flex justify-center items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="rounded-md w-full h-full object-cover"
                      />
                    </div>
                    {/* Right Section (Centered Title and Text) */}
                    <div className="flex flex-col w-full lg:w-1/2 h-80 lg:h-80 justify-center items-center text-center p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm bg-primary_color text-white font-semibold px-4 py-2 rounded-full">
                          {item.country}
                        </span>
                        <span className="text-sm bg-primary_color text-white font-semibold px-4 py-2 rounded-full">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.subtext}</p>
                    </div>
                  </div>
                ) : (
                  // Render the rest of the cards
                  <div
                    key={index}
                    className="rounded-lg border shadow-md transition-all flex flex-col"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Image */}
                    <div className="w-full h-40 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="rounded-t-md w-full h-full object-cover"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm bg-primary_color text-white font-semibold px-4 py-2 rounded-full">
                          {item.country}
                        </span>
                        <span className="text-sm bg-primary_color text-white font-semibold px-4 py-2 rounded-full">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.subtext}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default News;
