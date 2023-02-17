import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex w-full  flex-col lgl:flex-row gap-20 lgl:gap-20 "
    >
      {/* part one */}
      <div>
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm text-designColor tracking-[4px]">2013 - present</p>
          <h2 className="text-3xl md:text-4xl font-bold ">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 h-1/2 hover:h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Graduated Highschool"
            subTitle="Ngo Quyen Highschool (2013 - 2016)"
            result="3.90/4"
            des="Spending time in high school prepares the basic skills to step up to a more difficult academic path."
          />
          <ResumeCard
            title="Cybersecurity Major"
            subTitle="Eastern University (2016 - 2019)"
            result="none"
            des="Think I'm not suitable for it. So I thought of changing to another path."
          />
          <ResumeCard
              title="Software Engineer Major"
              subTitle="University of Economics and Financial (2019 - present)"
              result="3.3/4"
              des="Software developers are in higher demand for the future of I.T. I want to be a part of it, 
              I still try my best to get the better of me, despite of the chosen path is not a bed of roses."
            />
        </div>
      </div>
      {/* part Two */}
      <div>
        <div className=" flex flex-col gap-4 text-center">
          <p className="text-sm text-designColor tracking-[4px]">2019 - present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 h-1/2 hover:h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="A Freelancer Writer"
            subTitle="Work from home (2019 - 2020)"
            result="Home"
            des="Because of the social distancing, I have to find another way to learn and gain experience. 
            Being a freelancer writer gave me confidence to typing with less typo and faster also improved my Word and PPTX skills"
          />
          <ResumeCard
            title="A Waiter"
            subTitle="Coffee Shop (2018 - 2019)"
            result="Binh Duong province"
            des="I worked at coffee shop during the break. Hence to achieve soft skills also how society treats me.
            My aim is to combat agoraphobia and observe the behavior of many classes, 
            I'm an introvert"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education