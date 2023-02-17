import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8 ">
        <img className="w-32" src={logo} alt="logo" />
          <h2 className="uppercase font-titleFont text-3xl">
                Find me in
          </h2>
        <div className="flex gap-4 w-auto h-auto space-x-5">
            <span className="bannerIcon hover:text-blue-600">
             <a href='https://www.facebook.com/profile.php?id=100051636193808'><FaFacebookF/></a>
            </span>
            <span className="bannerIcon hover:text-cyan-400">
              <a href='/'><FaTwitter /></a>
            </span>
            <span className="bannerIcon hover:text-blue-800">
            <a href='https://www.linkedin.com/in/ph%C3%BAc-nguy%C3%AAn-nguy%E1%BB%85n-445075265?fbclid=IwAR1iMMfRqiySrUQLooCr-MHlHkjCvgKv1A1SRz50e0Z1RFi9LgoFWU9ZsLo'><FaLinkedinIn /></a>
            </span>
          </div>
      </div>
      <div className="w-full h-full ml-48 flex  flex-col ">
        <h3 className="text-xl uppercase text-designColor tracking-wider mt-28">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              About
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Portfolio
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Blog
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Contact
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full ml-48 flex flex-col mt-28">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Interest About
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Design Projects
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Cryptocurrency
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Volleyball
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Books
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Footer