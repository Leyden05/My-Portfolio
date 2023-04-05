import React, {useState}  from 'react';
import {AiOutlineMenu, AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {GrProjects} from 'react-icons/gr';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sidenav = () => {
    AOS.init();
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu 
            onClick={handleNav} 
            className='absolute top-4 right-4 z-99 md:hidden'/>
            {nav ? (
                <div className='fixed w-full h-screen bg-blue/90 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white m-2 p-4 curor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20} />
                        <span className='pl-3'>Home</span>
                    </a>
                    <a onClick={handleNav} href="#aboutme" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white m-2 p-4 curor-pointer hover:scale-110 ease-in duration-200'>
                        <BsPerson size={20} />    
                        <span className='pl-3'>Resume</span>
                    </a>
                    <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white m-2 p-4 curor-pointer hover:scale-110 ease-in duration-200'>
                        <GrProjects size={20} />
                        <span className='pl-3'>Projects</span>
                    </a>
                    <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-white m-2 p-4 curor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail size={20} />
                        <span className='pl-3'>Contact</span>
                    </a>
                </div>
            )
            : (
                ''
            )}

            <div className='md:block hidden fixed top-[25%] z-99'>
                <div className='flex flex-col'>
                    <a data-aos="fade-right" data-aos-delay="1900" href='#main' className='rounded-lg shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-110 ease duration-300 hover:bg-blue'>
                        <AiOutlineHome size={25}/>
                    </a>
                    <a data-aos="fade-right" data-aos-delay="2200" href='#aboutme' className='rounded-lg shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-110 ease duration-300 hover:bg-blue'>
                        <BsPerson size={25} />
                    </a>
                    <a data-aos="fade-right" data-aos-delay="2500" href='#projects' className='rounded-lg shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-110 ease duration-300 hover:bg-blue'>
                        <GrProjects size={25} />
                    </a>
                    <a data-aos="fade-right" data-aos-delay="2800" href='#contact' className='rounded-lg shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-110 ease duration-300 hover:bg-blue'>
                        <AiOutlineMail size={25} />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Sidenav;