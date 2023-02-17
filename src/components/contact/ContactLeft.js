import React from 'react'
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#111827] to-[#1f2937] p-4  lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-7">
        <h3 className="text-3xl font-bold text-green-500">Phuc Nguyen</h3>
        <p className="text-lg font-normal text-gray-400">
          M.E.R.N Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Let's talk about our business.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText hover:text-red-600"><a href='https://www.whatsapp.com/'>+84902982463</a></span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText hover:text-red-600"><a href='mailto:nguyennp19@uef.edu.vn'>nguyennp19@uef.edu.vn</a></span>
        </p>
        <div className="flex flex-col gap-4">
        <h2 className="text-base  font-titleFont mb-4 underline decoration-solid text-white 
        underline-offset-4 decoration-indigo-500 capitalize hover:uppercase cursor-pointer"> Download my resume here</h2>
        <div className="flex gap-4">
        <a href="Resume.pdf"download="Resume">
        <button class="relative group overflow-hidden pl-6 h-14 flex space-x-6 items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
          <span class="relative uppercase text-base text-black font-bold">Resumé</span>
          <div aria-hidden="true" class="w-14  transition duration-300 -translate-y-7 group-hover:translate-y-7">
              <div class="h-14 flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto fill-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="h-14 flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto fill-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
          </div>
        </button>
        </a>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default ContactLeft