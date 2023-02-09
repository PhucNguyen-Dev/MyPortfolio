import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import {FiAlignJustify} from "react-icons/fi";
import Title from '../layouts/Title';
import Card from './Card';
const Features = () => {
    return (
      <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Software Developer"
          des="I study the trend people are going to follow and play a role on it to create some simple tools for game etc."
          icon={<FiAlignJustify/>}
        />
        <Card
          title="Web Developer"
          des="It's a self-taught role that I often learn and practice. Simply design website and maintain database."
          icon={<AiFillAppstore/>}
        />
        <Card
          title="Graphic Designer"
          des="A self-taught interest that I usually do in free time. I can design some simple characters"
          icon={<SiProgress/>}
        />
        <Card
          title="Mobile Development"
          des="I worked on some teams that designed quite a few mobile projects on University playground."
          icon={<FaMobile/>}
        />
        <Card
          title="UI/UX Design"
          des="As the role of UX/UI designer, I have always find a safe and sound place to
          let imaginary flow though my mind."
          icon={<SiAntdesign/>}
        />  
      </div>
      </section>
    );
  }
  
  export default Features