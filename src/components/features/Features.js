import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { MdWebAsset} from "react-icons/md";
import Title from '../layouts/Title';
import Card from './Card';
const Features = () => {
    return (
      <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="My Roles" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Developer"
          des="I have experienced not only ReactJS but also some back-end language like Solidity, NodeJS,.. Database such as 
          MongoDB, SQL, FireBase."
          icon= {<MdWebAsset/>}
        />
        <Card
          title="Software Developer"
          des="I have worked with several groups on campus on many projects using C#, C++, Python."
          icon= {<AiFillAppstore/>}
        />
        
        {/* <Card
          title="Graphic Designer"
          des="A self-taught interest that I usually do in free time. I can design some simple characters"
          icon={<SiProgress/>}
        /> */}
        <Card
          title="Mobile Development"
          des="I participated on some projects required Java. As a role of developing ideas and paths."
          icon={<FaMobile/>}
        />
        <Card
          title="UI/UX Design"
          des="I have been using many Ui/Ux frameworks to design projects. Most familiar with TailwindCss then Material UI 
          then SCSS and lastly is Headless UI."
          icon={<SiAntdesign/>}
        />  
      </div>
      </section>
    );
  }
  
  export default Features