import React from 'react';

const Description = ({ text, className }) => {
  return (
    <p
      className={`
        font-poppins 
        text-[18px] 
        font-medium 
        leading-[28.8px] 
        text-left  
        decoration-skip-ink-none 
        text-[#667085] 
        sm:text-[14px]
        sm:leading-[24px] 
        ${className}`}
    >
      {text}
    </p>
  );
};

export default Description;
