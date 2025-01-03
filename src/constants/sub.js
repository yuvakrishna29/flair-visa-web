import React from 'react';

const SubHeader = ({ title, className }) => {
  return (
    <div className={`flex justify-start items-center ${className}`}>
      <h2
        className="
          font-poppins 
          text-[55px] 
          font-bold 
          leading-[66px] 
          text-left 
          decoration-skip-ink-none 
          text-[var(--black, #181621)] 
          text-gray-800
          md:text-[40px] 
          md:leading-[50px]
          sm:text-[28px] 
          sm:leading-[34px]"
      >
        {title}
      </h2>
    </div>
  );
};

export default SubHeader;
