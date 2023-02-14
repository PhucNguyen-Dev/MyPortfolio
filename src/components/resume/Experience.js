import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm text-designColor tracking-[4px]">2019 - present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
           title="A Waiter"
           subTitle="Coffee Shop (2018 - 2019)"
           result="Binh Duong province"
           des="I learned to know what and how clients express their needs."
          />
          <ResumeCard
           title="A Freelancer Writer"
           subTitle="Work from home (2019 - 2020)"
           result="Home"
           des="I can be able pull my thoughts to word by word and upgrade my writing skills"
          />
          <ResumeCard
            title="No occupied job"
            subTitle="None"
            result="None"
            des="Currently not having a chance to try my skill for the real trial"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm text-designColor tracking-[4px]">2016 - present</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
          <ResumeCard
            title="Tutor"
            subTitle="Teaching Natural Sciences (2016 - 2017)"
            result="Get to know some fellow friends"
            des="Teach the basics of these subjects."
          />
          <ResumeCard
            title="Help University Friend"
            subTitle="Coding (2022 - present)"
            result="Assisted University friend  "
            des="It's not much but it's a honest work."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;