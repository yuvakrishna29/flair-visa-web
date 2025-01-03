
import boxIcon1 from "../assets/boxIcones/Icon.png";
import boxIcon2 from "../assets/boxIcones/voice-activate-svgrepo-com 1.png";
import boxIcon3 from "../assets/boxIcones/Award.png";
import boxIcon4 from "../assets/boxIcones/Bank Note 05 (4).png";
import boxIcon5 from "../assets/boxIcones/Document Text (3).png";
import boxIcon6 from "../assets/boxIcones/Book Saved (2).png";
import boxIcon7 from "../assets/boxIcones/Workspace Desk (6).png";

export const data = [
  {
    title: "Free processing for all countries",
    description:
      "Enjoy seamless visa application services without additional processing fees for any country.",
    icon: (
      <img
        src={boxIcon1} // Image path
        alt="Icon"
        className="h-12 w-12 object-cover" // Image styling
      />
    ),
    bgColor: "bg-primary_color", // Add the bgColor field
    shadowColor: "shadow-gray-400", // Shadow color
  },
  // Add more items as needed
  {
    title: "Free processing for all countries",
    description:
      "Prepare for success with expert-led training in IELTS, TOEFL, and other language proficiency tests to meet global standards.",
    icon: (
      <img
        src={boxIcon2} // Image path
        alt="Icon"
        className="h-12 w-12 object-cover" // Image styling
      />
    ),
    bgColor: "bg-bg_customblue", // Add the bgColor field
    // shadowColor: "shadow-blue-200", // Shadow color
    shadowColor: "shadow-gray-400",
  },
  // Add more items as needed
  {
    title: "Scholarship Assistance",
    description:
      "Unlock financial opportunities with personalized guidance on scholarships available in your chosen destination.",
    icon: (
      <img
        src={boxIcon3} // Image path
        alt="Icon"
        className="h-12 w-12 object-cover" // Image styling
      />
    ),
    bgColor: "bg-bg_customgreen", // Add the bgColor field
    // shadowColor: "shadow-green-200", // Shadow color
    shadowColor: "shadow-gray-400",
  },
  // Add more items as needed
  {
    title: "Financial Aid",
    description:
      "Need additional funding? We assist in identifying financial aid options, ensuring your aspirations aren’t hindered by financial constraints.",
    icon: (
      <img
        src={boxIcon4} // Image path
        alt="Icon"
        className="h-12 w-12 object-cover" // Image styling
      />
    ),
    bgColor: "bg-bg_thickgreen", // Add the bgColor field
    // shadowColor: "shadow-red-200", // Shadow color
    shadowColor: "shadow-gray-400",
  },
  {
    title: "Application Fee Waiver",
    description:
      "Save more with exclusive application fee waivers for select universities and programs, thanks to our strong partnerships.",
    icon: (
      <img
        src={boxIcon5} // Image path
        alt="Icon"
        className="h-12 w-12 object-cover" // Image styling
      />
    ),
    bgColor: "bg-bg_customgliteblue", // Add the bgColor field
    // shadowColor: "shadow-red-200", // Shadow color
    shadowColor: "shadow-gray-400",
  },
  {
    title: "Visa Interview Guidance",
    description:
      "Ace your visa interview with confidence. Our experts provide mock sessions and tips to help you succeed.",
    icon: (
      <img
        src={boxIcon6} // Image path
        alt="Icon"
        className="h-12 w-12 object-cover" // Image styling
      />
    ),
    bgColor: "bg-bg_customOrange", // Add the bgColor field
    // shadowColor: "shadow-bg_customOrange", // Shadow color
    shadowColor: "shadow-gray-400",
  },
  {
    title: "Visa Interview Guidance",
    description:
      "Ace your visa interview with confidence. Our experts provide mock sessions and tips to help you succeed.",
    icon: (
      <img
        src={boxIcon7} // Image path
        alt="Icon"
        className="h-12 w-12 object-cover" // Image styling
      />
    ),
    bgColor: "bg-bg_variengreen", // Add the bgColor field
    // shadowColor: "shadow-bg_variengreen", // Shadow color
    shadowColor: "shadow-gray-400",
  },
];
