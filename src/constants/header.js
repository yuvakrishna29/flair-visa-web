import React from 'react';

const MainHeader = ({ title, className }) => {
  return (
    <header className={`flex justify-center items-center  ${className}`}>
      <h1
        className="
          font-poppins 
          text-[var(--sds-typography-title-hero-size)] 
          font-bold 
          text-center 
          leading-[86.4px] 
          tracking-[-0.03em] 
          decoration-skip-ink-none 
          underline-offset-4
          md:text-[50px] 
          md:leading-[60px] 
          md:tracking-normal
          sm:text-[32px] 
          sm:leading-[40px]
          text-white"
      >
        {title}
      </h1>
    </header>
  );
};

export default MainHeader;
