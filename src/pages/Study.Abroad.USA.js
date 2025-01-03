import React from "react";
import Banner from "../components/Banner";
import USABanner from "../assets/banners/usa header.png";
import WhyStudyUSA from "../sections/WhyStudyUsaPage/WhyStudyUSA";
import AboutUsa from "../sections/WhyStudyUsaPage/AboutUsa";
import BestUniversitiesInUsa from "../sections/WhyStudyUsaPage/BestUniversitiesInUsa";
import IntakeInUsa from "../sections/WhyStudyUsaPage/IntakeInUsa";
import Tips from "../sections/WhyStudyUsaPage/Tips";

const StudyAbroadUSA = () => {
  return (
    <main>
      <Banner
        imageSrc={USABanner}
        title={"Study In USA"}
        subtitle={
          "A U.S. degree opens doors to global career opportunities and growth."
        }
      />
      <div className="custom_container">
        <WhyStudyUSA />
        <AboutUsa />
        <BestUniversitiesInUsa />
        <IntakeInUsa />
        <Tips />
      </div>
    </main>
  );
};

export default StudyAbroadUSA;
