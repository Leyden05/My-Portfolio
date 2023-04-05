import React from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  AOS.init();
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="../public/bPhotoCopy.jpg"
        alt="my face"
      />
      <div className="w-full h-screen absolute top-0 left-0">
        <div className="max-w-[70%] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center mt-[-8%] ml-[25%]">
          <h1 className="sm:text-7xl text-5xl font-bold text-white">
            <span
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
            >
              Hi,
            </span>{" "}
            <span
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="600"
            >
              I'm
            </span>{" "}
            <span
              className="text-blue"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="900"
            >
              Jeremy
            </span>
          </h1>
          <h2
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="1500"
            className="flex sm:text-4xl font-bold text:3xl pt-4 text-white"
          >
            I'm a
            <TypeAnimation
              className="text-red"
              sequence={[
                "Developer",
                2000,
                "Designer",
                2000, // Waits 2s
                "Musician",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "0.3em" }}
            />
          </h2>
          {/* <div className="grid sm:grid-cols-2 gap-4 ">
            <a href="https://github.com/Leyden05" target="_blank" className='w-[75%] flex justify-center items-center rounded-lg shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 z-10'>
              <BsGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jcrouthamel05/" target="_blank" className='w-[75%] flex justify-center items-center rounded-lg shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 z-10'>
              <FaLinkedinIn size={20} />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
