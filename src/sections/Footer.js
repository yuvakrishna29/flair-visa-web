import React, { useState, useEffect } from "react";
import { FooterLinks } from "../constants/FooterLinks";
import FooterLogo from "../assets/logo.png";
import Aos from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { FaArrowUp } from "react-icons/fa"; // Import Chevron Up icon

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Initialize AOS when the component mounts
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true); // Show button if scrolled down 300px
      } else {
        setShowButton(false); // Hide button when scrolled back to top
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <footer className="text-[#0656A2] bg-white">
      {/* Top Section */}
      <div className="container mx-auto flex flex-wrap items-start space-y-8 lg:space-y-0 lg:space-x-20 py-8 px-4">
        {/* Logo */}
        <div
          className="w-full lg:w-auto flex justify-center lg:justify-start"
          data-aos="fade-up"
        >
          <img src={FooterLogo} alt="footer_logo" className="w-[250px]" />
        </div>

        {/* Footer Links */}
        <div
          className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          {FooterLinks.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-stretch justify-start"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div>
                {/* Section Title with Underline */}
                <h3 className="text-lg font-semibold mb-3 pb-1">
                  {section.title}
                </h3>
              </div>
              <ul>
                {section.footLinks.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a
                      href={link.href}
                      className="text-sm font-medium text-gray-400 hover:text-[#0656A2] transition-all duration-300 ease-in-out"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto">
        <div
          className="text-white bg-slate-950 p-4 text-gray-700 text-base flex flex-wrap items-center justify-between px-4 "
          data-aos="fade-up"
        >
          <span className="w-full lg:w-auto text-center lg:text-left ">
            © 2023 Flairsvisa All Rights Reserved.
          </span>
          <div
            className="w-full lg:w-auto text-center lg:text-right mt-2 lg:mt-0"
            data-aos="fade-right"
          >
            <a href="#" className="hover:text-primary_color mx-2">
              Disclaimer
            </a>
            |
            <a href="#" className="hover:text-primary_color mx-2">
              Privacy Policy
            </a>
            |
            <a href="#" className="hover:text-primary_color mx-2">
              Terms of Use
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-28 right-8 bg-primary_color text-white p-3 rounded-full shadow-lg hover:bg-[#0656A2] transition-all duration-300 ease-in-out"
          aria-label="Back to Top"
        >
          <FaArrowUp className="h-6 w-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
