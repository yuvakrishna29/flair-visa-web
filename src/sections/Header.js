import React, { useEffect } from "react";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { SocialIcons } from "../constants/Social";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const googleMapUrl = `https://maps.app.goo.gl/3x9WUxXmR5FMsdb77`;

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      once: true, // Animations happen only once
    });
  }, []);

  return (
    <div
      className="w-full bg-header_color py-4 px-4 sm:px-6 lg:px-9 xl:px-22 hidden md:flex md:items-center lg:justify-between md:justify-center"
      data-aos="fade-in"
    >
      <div className="lg:flex xl:gap-40 gap-10 hidden" data-aos="fade-right">
        <a href="mailto:someone@example.com" className="flex items-center">
          <IoMailOpenOutline className="text-primary_color h-5 w-5" />
          <span className="text-header_text_color ml-2 text-sm">
            info@flairtechnologies.in
          </span>
        </a>
        <a
          href={googleMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FaLocationDot className="text-primary_color h-5 w-5" />
          <span className="text-header_text_color ml-2 text-sm">
            05, Vivekananda Layout, Marathahalli, Bangalore, Karnataka – 560037,
          </span>
        </a>
      </div>
      <div className="flex gap-4" data-aos="fade-left">
        {Object.entries(SocialIcons).map(([key, { icon, href }]) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img src={icon} alt={key} className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
