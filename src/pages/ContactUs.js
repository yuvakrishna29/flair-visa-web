import Banner from "../components/Banner";
import ContactUsBanner from "../assets/banners/contact_banner.png";
import "react-phone-input-2/lib/style.css";
import MapComponent from "../components/MapComponent";
import OurBranchesSlide from "../sections/ContactPage/OurBranchesSlide";
import ContactForm from "../sections/ContactPage/ContactForm";
import MapBakground from "../assets/map_contact.svg";

const ContactUs = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image for Building */}
      <div className="absolute top-[63%] -right-[40%] -z-1">
        <img
          src={MapBakground}
          alt="buildings"
          className="w-full h-full object-cover opacity-20 hidden md:block"
        />
      </div>
      <Banner
        imageSrc={ContactUsBanner}
        title={"Get in Touch with Us"}
        subtitle={
          "We’re here to answer your questions and assist you every step of the way. Reach out to us anytime!"
        }
      />
      <div className="custom_container">
        <ContactForm />
        <MapComponent />
        <OurBranchesSlide />
      </div>
    </section>
  );
};

export default ContactUs;
