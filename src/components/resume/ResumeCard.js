import React from 'react'

const ResumeCard = ({title,subTitle,result,des}) => {

  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-2 flex flex-col justify-between gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between lgl:gap-0 lgl:items-center mb-8">
          <div>
            <h3 className="text-xl md:text-2xl text-gray-600 font-semibold group-hover:text-white duration-300 mt-14">
              {title}
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-2 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium mt-10">
              {result}
            </p>
          </div>
        </div>
        <div class="invisible group-hover:visible h-fit text-clip flex-grow flex text-sm ml-auto relative">
          <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-white duration-300">
              {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResumeCard
