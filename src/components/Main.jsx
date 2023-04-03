import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Main = () => {
  return (
    <div id="main">
      <img className="w-full" src="../public/bPhoto.jpg" alt="my face" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/0">
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl'>Hi, I'm Jeremy</h1>
          <h2>
            I'm a
            <TypeAnimation
              sequence={[
                "Developer", // Types 'One'
                2000, // Waits 1s
                "Designer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Musician",
                2000,
                
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "1em" }}
            />
          </h2>
          <div>
            <BsGithub className='cursor-pointer' size={20} />
            <FaLinkedinIn className='cursor-pointer' size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
