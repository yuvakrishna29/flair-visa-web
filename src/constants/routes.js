import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../../src/MainLayout";
import Home from "../pages/Home";
import About from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import StudyAbroadUSA from "../pages/Study.Abroad.USA";
import News from "../pages/News";
import FAQ from "../pages/FAQ’s";
const AppRoutes = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about-us",
          element: <About />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/study-abroad/usa",
          element: <StudyAbroadUSA />,
        },
        {
          path: "/faq",
          element: <FAQ />,
        },
        {
          path: "/news",
          element: <News />,
        },
      ],
    },
  ]);
};

export default AppRoutes;
