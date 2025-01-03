import { FaUserGraduate, FaPassport, FaUniversity } from "react-icons/fa";

export const studentServices = [
  {
    title: "Student Counselling",
    icon: {
      src: <FaUserGraduate />, // React Icon component
      alt: "Student Counselling Icon",
      iconBg: "#0D1282",
      iconShadow: "rgba(13, 18, 130, 30)",
      backgroundColor: "#F9F9F9", // Background color for the icon
    },
    href: "/student-counselling",
    subText: "Guiding you through academic and personal challenges.",
  },
  {
    title: "Visa Counselling",
    icon: {
      src: <FaPassport />,
      alt: "Visa Counselling Icon",
      iconBg: "#D71313",
      iconShadow: "rgba(215, 19, 19, 30)",
      backgroundColor: "#F9F9F9",
    },
    href: "/visa-counselling",
    subText: "Helping you understand visa processes and requirements.",
  },
  {
    title: "Choose a Suitable University",
    icon: {
      src: <FaUniversity />,
      alt: "University Icon",
      iconBg: "#0D1282",
      iconShadow: "rgba(13, 18, 130, 30)",
      backgroundColor: "#F9F9F9",
    },
    href: "/choose-university",
    subText: "Find the perfect university for your goals and career.",
  },
];
