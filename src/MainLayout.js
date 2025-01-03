import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./sections/Header";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";

const MainLayout = () => {
  return (
    <div className="h-screen w-full">
    <div className="bg-bg_color">
      <Header />
      <Navbar />
      {/* Outlet renders the child route components */}
      <div className="content">
        <Outlet />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
