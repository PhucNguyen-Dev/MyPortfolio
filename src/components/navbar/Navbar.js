import React from 'react'
import { Link } from "react-scroll";
import { navLinksdata } from '../../constants';


const Navbar = () => {
 
    return (
      <div className="w-full  h-20 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
         <div>
          <ul className="container font-bold text-4xl text-white bg-gradient-to-r from-purple-500 to-red-500 rounded-full px-2">
              My PORTFOLIO
          </ul>
        </div> 
        <div>
          <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default Navbar