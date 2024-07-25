import React from 'react';
import theme_pattern from '/src/assets/theme_pattern.svg';
import mywork_data from '/src/assets/mywork_data.js';
import arrow_icon from '/src/assets/arrow_icon.svg';
import './website.css';

const Websites = () => {
  return (
    <div id='work' className='mywork w-full flex justify-center relative'>
      <div className='mywork-tittle flex flex-col items-center'>
        <div className=' mywork-tittle mb-20 mt-[5vh] relative  flex items-center justify-center  '>
          <h1 className=' mtittle text-6xl font-bold '>My Latest work</h1>
          <img
            className='icon absolute  right-[0vw] z-[-2] '
            src={theme_pattern}
            alt=""
          />
        </div>
        <div className='project grid grid-cols-3 lg:gap-[30px] md:gap-[25px] '>
          {mywork_data.map((work, index) => (
            <img
              className=' h-32 w-40 md:h-72  rounded-[10px] object-center'
              key={index}
              src={work.w_img}
              alt=""
            />
          ))}
        </div>
        <div className='showMore flex items-center gap-5 border-2 hover:gap-12 cursor-pointer duration-300 py-6 px-10 rounded-full mt-12'>
          <p className='font-medium '>show more</p>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Websites;
