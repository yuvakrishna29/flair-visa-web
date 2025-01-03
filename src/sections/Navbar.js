import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronRight, FaBars, FaTimes } from "react-icons/fa";
import { NavLinks } from "../constants/NavLinks";
import Logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import { RxCross1 } from "react-icons/rx";
import Aos from "aos";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  const toggleMenu = (key) => {
    setOpenMenu((prev) => (prev === key ? null : key));
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (title) => {
    setOpenSubMenu((prev) => (prev === title ? null : title));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenMenu(null);
        setOpenSubMenu(null);
      }
      Aos.init({ duration: 1000, once: true });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="lg:px-9 xl:px-22 px-4 py-4 flex justify-between items-center w-full "
    >
      <a
        href="/"
        className="logo"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img src={Logo} className="h-16 w-50 lg:h-16 lg:w-40" alt="logo" />
      </a>

      {/* Hamburger icon for mobile */}
      <div
        className="lg:hidden text-2xl text-black cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        data-aos="fade-down"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Desktop menu */}
      <ul
        className="hidden lg:flex md:space-x-8 lg:space-x-4 lg:items-center lg:text-sm xl:space-x-8 xl:text-base z-50"
        data-aos="fade-left"
      >
        {Object.entries(NavLinks).map(([key, { title, href, subLinks }]) => {
          const isActive = location.pathname === href;

          return (
            <li key={key} className="relative">
              <a
                href={href || "#"}
                onClick={() => toggleMenu(key)}
                className={`flex font-medium items-center text-md  ${
                  isActive
                    ? "text-primary_color "
                    : "text-subtext_color hover:text-primary_color"
                } transition-all duration-500 ease-in-out`}
              >
                {title}
                {subLinks && (
                  <span>
                    {openMenu === key ? (
                      <FaChevronDown className="ml-2 h-3 w-3 text-gray-300" />
                    ) : (
                      <FaChevronRight className="ml h-3 w-3 text-gray-300" />
                    )}
                  </span>
                )}
              </a>

              {subLinks && openMenu === key && (
                <ul className="absolute left-0 top-6 bg-white text-subtext_color mt-2 p-4 rounded-lg shadow-lg w-auto min-w-max">
                  {subLinks.map(({ title, href, subLinks }) => (
                    <li key={title} className="relative">
                      <a
                        href={href || "#"}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSubMenu(title);
                        }}
                        className="py-2 px-4 flex items-center hover:text-primary_color rounded-md w-full"
                      >
                        {title}
                        {subLinks && (
                          <span>
                            {openSubMenu === title ? (
                              <FaChevronDown className="ml-2 h-3 w-3 text-gray-300" />
                            ) : (
                              <FaChevronRight className="ml-2 h-3 w-3 text-gray-300" />
                            )}
                          </span>
                        )}
                      </a>

                      {subLinks && openSubMenu === title && (
                        <ul className="  text-subtext_color p-2  w-auto min-w-max font-medium">
                          {subLinks.map(({ title, href }) => (
                            <li key={title}>
                              <a
                                href={href || "#"}
                                className="block py-2 px-4 hover:text-primary_color text-subtext_color font-base rounded"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setOpenMenu(null);
                                  setOpenSubMenu(null);
                                }}
                              >
                                {title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
        <Button
          className="hidden lg:block"
          onClick={() => {}}
          data-aos="fade-left"
        >
          Book Appointment
        </Button>
      </ul>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicking overlay
          ></div>
          {/* Mobile menu content */}
          <div
            className={`fixed top-0 right-0 z-50 w-3/5 h-full bg-white shadow-lg flex items-center px-8 
      transition-transform duration-1000 ease-in-out min-[320px]:w-full ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
          >
            <div
              className="absolute top-20 right-10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <RxCross1 className="h-6 w-6" />
            </div>
            <ul className="flex flex-col p-6 space-y-10 w-full">
              {Object.entries(NavLinks).map(
                ([key, { title, href, subLinks }]) => {
                  const isActive = location.pathname === href;

                  return (
                    <li key={key} className="relative">
                      <a
                        href={href || "#"}
                        onClick={() => toggleMenu(key)}
                        className={`flex font-medium items-center gap-2 text-base ${
                          isActive
                            ? "text-primary_color"
                            : "text-subtext_color hover:text-primary_color"
                        } transition-all duration-500 ease-in-out`}
                      >
                        {title}
                        {subLinks && (
                          <span>
                            {openMenu === key ? (
                              <FaChevronDown className="ml-2 text-gray-400" />
                            ) : (
                              <FaChevronRight className="ml-2 text-gray-400" />
                            )}
                          </span>
                        )}
                      </a>
                      {/* Mobile Submenu */}
                      {subLinks && openMenu === key && (
                        <ul className="mt-2 px-6 py-2 rounded-lg transition-all duration-1000 ease-in-out">
                          {subLinks.map(({ title, href, subLinks }) => (
                            <li key={title}>
                              <a
                                href={href || "#"}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleSubMenu(title);
                                }}
                                className="block py-2 px-4 hover:bg-gray-200"
                              >
                                {title}
                                {subLinks && (
                                  <span>
                                    {openSubMenu === title ? (
                                      <FaChevronDown className="ml-2" />
                                    ) : (
                                      <FaChevronRight className="ml-2" />
                                    )}
                                  </span>
                                )}
                              </a>
                              {/* Nested Submenu for Mobile */}
                              {subLinks && openSubMenu === title && (
                                <ul className="mt-2 p-4 bg-gray-200 rounded-md">
                                  {subLinks.map(({ title, href }) => (
                                    <li key={title}>
                                      <a
                                        href={href || "#"}
                                        className="block py-2 px-4 hover:bg-gray-300"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setOpenMenu(null);
                                          setOpenSubMenu(null);
                                        }}
                                      >
                                        {title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }
              )}
              <div className="mt-4">
                <Button onClick={() => {}}>Book Appointment</Button>
              </div>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
