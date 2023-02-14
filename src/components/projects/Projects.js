import React from 'react'
import Title from '../layouts/Title'
import { project1, project4, project2, project3} from "../../assets/index";
import ProjectCards from './ProjectCards';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center ">
        <Title
          title="Projects Field"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 ">
        <ProjectCards
          title="Crowd Funding Website"
          des="Crowd Funding Website is my most proud of one. It's a crowd funding platform combine with WEB3 technology 
          allow user to act freely and safety."
          src={project1}
        />
        <ProjectCards
          title="Movie website basic"
          des="A basic movie website base on Netflix, using Reactjs, sass and other Reactjs components. And with the help of TheMovieDB to fetched API."
          src={project2}
        />
        <ProjectCards
          title="Classic Puzzle mobile game"
          des="A classic mobile game built in Java language. The game is simply entertain with need player to find two object. Suitable with everyone."
          src={project4}
        />
        <ProjectCards
          title="Youtube clone"
          des="It's my first built website project. Thought it not beautiful nor fully function. But it's a Start for my new journey."
          src={project3}
        />
      </div>
    </section>
  );
}

export default Projects