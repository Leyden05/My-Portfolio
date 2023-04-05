import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aboutme = () => {
  AOS.init();
  return (
    <div 
      id="aboutme"
      className="flex flex-col justify-center align-center w-full m-auto md:pl-20 p-4 py-16 bg-white"
    >
      <h1 data-aos="fade-up" data-aos-delay="500" className="text-6xl mr-[6%] font-bold text-center text-blue py-16">
        Resume
      </h1>
      <div data-aos="fade-up" className="w-[80%] ml-[8%] h-[800px] bg-blue rounded-lg m-2 p-2 text-center">
        <embed
          src="src\assets\Resume.pdf"
          width="100%"
          height="100%"
          type="application/pdf"
        />
      </div>
    </div>
  );
};

export default Aboutme;
