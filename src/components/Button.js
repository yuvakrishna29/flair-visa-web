import React from "react";
import { FaChevronRight } from "react-icons/fa";

// Reusable Button Component
const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="btn_outline">
      {children}
      <div className="btn_outline_circle ">
        <FaChevronRight className="w-4 h-4" />
      </div>
    </button>
  );
};

export default Button;
