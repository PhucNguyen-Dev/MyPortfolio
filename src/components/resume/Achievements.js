import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm text-designColor tracking-[4px]">2013 - 2022</p>
          <h2 className="text-4xl font-bold ">Academic Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Academic Contests."
            subTitle="Physics Contest."
            result="Failed"
            des="Used to be a member of the Physics team and competed in Dong Nai province but only stopped at the consolation prize."
          />
          <ResumeCard
            title="Academic Contests."
            subTitle="Water rocket building contest."
            result="Won the first prize"
            des="We built our rocket toys with only PVC pipes, 502 adhesive with pure water and use `water-pressure` to propel the rocket as high as possible"
          />
          <ResumeCard
            title="Academic Contests."
            subTitle="Science and technology innovation contest."
            result="Won the 3rd price"
            des="Propagating cellulose biofilms from Kombucha tea serves many industries"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;