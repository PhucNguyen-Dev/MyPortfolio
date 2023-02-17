import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";



const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
           I'm <span className="text-designColor capitalize">Phuc Nguyen</span>
                <p className="text-white capitalize text-right mr-28">Or<span className="semibold text-4xl
                 text-orange-800">{`<Kent Nguyen>`}</span></p>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont tracking-wide py-4 leading-loose">
          I'm a Junior Software Developer and a self-teaching Web Developer. I'm an introvert but a little extrovert.
          I'm good at catching up with new and modern technology. I always focus on getting the job done. 
          
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 ">
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
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
        </div> */}
        <div>
          <div className="gap-8 grid grid-cols-3">
            <span className="bannerIcon hover:text-cyan-500 -rotate-45">
              ReactJS
            </span>
            <span className="bannerIcon hover:text-white rotate-12">
              NextJS
            </span>
            <span className="bannerIcon hover:text-cyan-300 rotate-45">
              TailwindCSS
            </span>
          </div>
          <h2 className="font-titleFont text-4xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400 font-bold lgl:text-6xl ">
              GOOD SKILLS AT
          </h2>
          <div className="gap-8 grid grid-cols-3">
            <span className="bannerIcon hover:text-yellow-400 -rotate-12 ">
              Python
            </span>
            <span className="bannerIcon hover:text-green-400 rotate-90 mt-4">
              HTML, CSS
            </span>
            <span className="bannerIcon hover:text-red-400 -rotate-12 ">
              Java
            </span>
          </div>
        </div>
      </div>
      <a class="flex " href="CurriculumVitae.pdf"download="Resume">
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
  );
}

export default LeftBanner