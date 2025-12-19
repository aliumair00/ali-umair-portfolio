import React from 'react';
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_img from '/public/ali.jpeg'
import { motion } from 'framer-motion';
import LightRays from './LightRays';

const Hero = () => {
  return (
    <div id='home' className='relative flex items-center flex-col px-5 md:px-0 text-center md:text-left'>
      {/* LightRays Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#f0f5f5ff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays w-full h-full"
        />
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='relative z-10 w-[150px] h-[150px] md:w-[250px] md:h-[250px] mx-auto md:mx-0'
      >
        <img className='rounded-full object-cover object-[50%_17%] h-full w-full mt-[20px] ' src={profile_img} alt="" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='relative z-10 mt-[30px] md:mt-[50px] flex items-center justify-center md:justify-start gap-[10px]'
      >
        <div className='h-[35px] w-[35px] md:h-[45px] md:w-[45px] rounded-full flex items-center justify-center'>
          <a className='cursor-pointer' href="https://www.linkedin.com/in/ali-umair-6a93432b2/">
            <RiLinkedinBoxFill className='text-[25px] md:text-[35px] font-bold hover:scale-[1.3] duration-500 transition-transform' />
          </a>
        </div>
        <div className='h-[35px] w-[35px] md:h-[45px] md:w-[45px] rounded-full flex items-center justify-center'>
          <a className='cursor-pointer' href="https://github.com/aliumair00">
            <BsGithub className='text-[25px] md:text-[35px] font-bold hover:scale-[1.3] duration-500 transition-transform' />
          </a>
        </div>
        <div className='h-[35px] w-[35px] md:h-[45px] md:w-[45px] rounded-full flex items-center justify-center'>
          <a className='cursor-pointer' href="https://www.instagram.com/ali_hun_beyy/?hl=en">
            <FaInstagram className='text-[25px] md:text-[35px] font-bold hover:scale-[1.3] duration-500 transition-transform' />
          </a>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='relative z-10 text-[24px] md:text-[50px] tracking-[2px] font-bold items-center my-5 md:my-0'
      >
        <span className='bg-gradient-to-r from-[#DA7C25] to-[#B415FF] bg-clip-text text-transparent'>I'm Ali Umair,</span> MERN STACK DEVELOPER.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className='relative z-10 md:ml-[5vw] my-[10px] leading-loose items-center text-[16px] md:text-[18px]'
      >
        I am a MERN stack developer specializing in dynamic web applications. With expertise in MongoDB, Express.js, React, and Node.js,<br className="hidden md:block" />
        I create innovative solutions and maintainable code. Let's connect and build something amazing together!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className='relative z-10 mt-[30px] md:mr-18 items-center gap-[15px] md:gap-[25px] flex flex-col md:flex-row'
      >
        <AnchorLink href='#contact' offset={50}>
          <button className='px-[20px] py-[10px] md:px-[30px] md:py-[18px] bg-gradient-to-r from-[#DA7C25] to-[#B415FF] rounded-[50px] cursor-pointer transition-all duration-100 border-2 border-transparent hover:border-white text-[14px] md:text-base'>
            Connect with me
          </button>
        </AnchorLink>
        <a href="/AliUmair-CV.pdf" download>
          <button className='px-[20px] py-[10px] md:px-[45px] md:py-[18px] border-2 border-white rounded-[50px] cursor-pointer transition-all duration-300 hover:border-[#B415FF] text-[14px] md:text-base'>
            My resume
          </button>
        </a>
      </motion.div>
    </div>
  );
}

export default Hero;
