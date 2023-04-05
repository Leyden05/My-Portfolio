import React from "react";
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

const Projectitem = ({ img, title, desc, href, link }) => {
  return (
    <div data-aos="fade-up" className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl group hover:bg-blue ease duration-300">
      <img
        src={img}
        alt="collection of projects"
        className="rounded-xl group-hover:opacity-10 ease duration-300"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text:5xl sm:text-3xl font-bold text-white text-center ease duration-300">
            {title}
        </h3>
        <p className="pb-4 pt-2 text:2xl sm:text-1xl text-white text-center">{desc}</p>
        <div className='grid sm:grid-cols-2'>
        <a href={href} target="_blank" className='w-[75%] flex justify-center items-center rounded-lg shadow-lg bg-white m-2 p-4 curor-pointer hover:scale-110 ease-in duration-200'>
          <CgWebsite size={25} />
        </a>
        <a href={link} target="_blank" className='w-[75%] flex justify-center items-center rounded-lg shadow-lg bg-white m-2 p-4 curor-pointer hover:scale-110 ease-in duration-200'>
            <BsGithub size={25} />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Projectitem;
