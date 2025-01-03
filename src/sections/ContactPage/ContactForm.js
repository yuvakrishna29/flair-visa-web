import { useState, useEffect } from "react";
import Heading from "../../components/Heading";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const ContactForm = () => {
  // State to hold form data and error tracking
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const [isSuccess, setIsSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset the error state when the user starts typing
    setErrors({
      ...errors,
      [name]: false,
    });
  };

  // Handle phone input change (specific for phone input component)
  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phone: value,
    });

    // Reset phone error state when user starts typing
    setErrors({
      ...errors,
      phone: false,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { ...errors };

    // Simple form validation (can be extended)
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.phone) newErrors.phone = true;
    if (!formData.message) newErrors.message = true;

    // Check if there are any errors
    if (Object.values(newErrors).includes(true)) {
      setErrors(newErrors);
      return;
    }

    // Process form data (e.g., log it, send to backend)
    console.log("Form submitted with data:", formData);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Show success screen (can be replaced with a modal or notification)
    setIsSuccess(true);
  };

  // Success Popup
  const SuccessPopup = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-sm">
        <h2 className="text-2xl font-bold text-green-600">Success!</h2>
        <p className="mt-4">
          Thank you for your message. We will get back to you soon!
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 py-2 px-4 bg-primary_color text-white rounded-md hover:bg-primary_color/90"
        >
          Close
        </button>
      </div>
    </div>
  );

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
  }, []);

  return (
    <div className="py-8 px-6 md:px-2">
      <div className="text-center mb-12" data-aos="fade-up">
        <Heading
          text={"We’re Here to Help"}
          subtext={
            "Whether you need guidance or have a question, our team is just a message away."
          }
        />
      </div>

      {/* Contact Info and Form Section */}
      <div className="flex flex-wrap items-center justify-center bg-white shadow-md rounded-xl p-6 md:p-12">
        <div
          className="w-full lg:w-1/2 lg:mb-0 pr-6 pb-8"
          data-aos="fade-right"
        >
          {/* Left Side - Contact Info */}
          <h1 className="text-4xl font-bold text-primary_color mb-2">
            Contact Us
          </h1>
          <p className="text-md text-subtext_color mb-6 w-full sm:w-2/3">
            We're here to help. Whether you have a question or need guidance,
            reach out to us.
          </p>
          <div className="text-md text-gray-800 font-medium flex flex-col space-y-4">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-slate-800 hover:text-slate-950 w-max"
            >
              <div className="p-2 bg-primary_color text-white rounded-full ">
                <FaPhoneAlt className="text-xl" />
              </div>
              <span>+91 974 974 9596</span>
            </a>
            <a
              href="mailto:support@example.com"
              className="flex items-center space-x-2 text-slate-800 hover:text-slate-950 w-max"
            >
              <div className="p-2 bg-primary_color text-white rounded-full ">
                <FaEnvelope className="text-xl" />
              </div>

              <span>info@flairtechnologies.in</span>
            </a>
          </div>
        </div>
        {/* Right Side - Form */}
        <div
          className="w-full lg:w-1/2 bg-white shadow-md rounded-xl p-6 md:p-12 border border-gray-200"
          data-aos="fade-left"
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 sm:text-sm"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter Full Name.
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 sm:text-sm"
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter Email address.
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <div className="w-full">
                <PhoneInput
                  country={"us"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputClass="mt-1 p-4 block w-full focus:outline-none focus:ring-2 focus:ring-gray-200 sm:text-sm"
                  containerClass="w-full rounded-md border-gray-300 shadow-sm"
                  buttonStyle={{ backgroundColor: "#ffffff", border: "none" }}
                  inputStyle={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                  buttonClass="bg-white text-black"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    Please Enter Mobile Number.
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 sm:text-sm"
                placeholder="Your Message"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter your Message.
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary_color text-white font-medium rounded-md hover:bg-primary_color/90"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {isSuccess && <SuccessPopup />}
    </div>
  );
};

export default ContactForm;
