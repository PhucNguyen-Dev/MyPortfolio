import React from 'react'
import Title from '../layouts/Title'
import { project1, project4, project2, project3} from "../../assets/index";
import ProjectCards from './ProjectCards';


const Projects = () => {
  
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center ">
        <Title
          title="Projects Field"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCards
          title="Crowd Funding Website"
          des="The project built on ReactJS framework, TailwindCSS, Solidity back-end to connect with metamask."
          src={project1}/>
        <ProjectCards
          title="Movie website basic"
          des="A basic movie website base on Netflix, using ReactJS, SASS and other ReactJS components and TheMovieDB to fetched API."
          src={project2}/>
        <ProjectCards
          title="Classic Puzzle mobile game"
          des="A classic mobile game built in Java language. The game is simply entertain with need player to find two object. Suitable with everyone."
          src={project4}/>
        <ProjectCards
          title="Youtube clone"
          des="It's my first built website project. Project built on ReactJS, MaterialUI, React-Router-Dom."
          src={project3}/>
      </div>
    </section>
  );
}

export default Projects