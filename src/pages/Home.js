import React, { useEffect } from "react";
import HomeBanner from "../assets/banners/home_banner.png";
import Banner from "../components/Banner";
import About from "../sections/HomePage/About";
import Services from "../sections/HomePage/services";
import TopRatedUniversities from "../sections/HomePage/TopRatedUniversities";
import Testimonials from "../sections/HomePage/Testimonials";
import Events from "../sections/HomePage/Events";
import Faq from "../sections/HomePage/Faq";
import NewsUpdates from "../sections/HomePage/NewsUpdates";
import Button from "../components/Button";
import Aos from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
// import BuildingsSvg from "../assets/buildings.svg";
import HowWeWorks from "../sections/HomePage/HowWeWorks";

const Home = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <main>
      {/* Background Image for Building */}
      {/* <div className="absolute top-[25%] right-0 -z-1">
        <img
          src={BuildingsSvg}
          alt="buildings"
          className="w-full h-full object-cover opacity-30 hidden md:block"
        />
      </div> */}

      {/* Banner */}
      <div>
        <Banner
          imageSrc={HomeBanner}
          title={"Turn your Study abroad Dreams into reality"}
          linkHref={"/courses"}
          linkText={"Start your Journey"}
          subtitle={"Transforming Aspirations into International Achievements"}
        />
      </div>

      <div className="custom_container">
        {/* About Us Section */}
        <About />
        {/* Services Section */}
        <Services />

        <HowWeWorks />

        {/* Top Rated Universities Section */}
        <TopRatedUniversities />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Events Section */}
        <Events />

        {/* FAQ Section */}
        <Faq />

        {/* News Updates Section */}
        <NewsUpdates />

        {/* Free Counselling Section */}
        <div className="flex flex-col items-center justify-center py-8 px-6 md:px-8 lg:px-16">
          <h2
            className="text-5xl font-bold text-center mt-6 mb-6 "
            data-aos="fade-up"
          >
            Get a <span className="text-primary_color">Free Counselling</span>
          </h2>
          <p
            className="text-subtext_color text-sm font-medium mb-6 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Find your ideal study abroad destination, apply, and connect with
            our expert guidance counselors
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <Button>Apply Now</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
