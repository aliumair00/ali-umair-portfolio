import React from 'react';
import './Hero.css';
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_img from '/public/ali.jpeg'

const Hero = () => {
  return (
    <div id='home' className='hero flex items-center flex-col'>
      <div className='profile'>
        <img className='img h-full w-full mt-[20px]' src={profile_img} alt=""/>
      </div>
      <div className='socialicon mt-[50px] flex items-center gap-[10px]'>
        <div className='linkedin h-[45px] w-[45px] rounded-full flex items-center justify-center'>
          <a className='pointer' href="https://www.linkedin.com/in/ali-umair-6a93432b2/">
            <RiLinkedinBoxFill className='text-[35px] font-bold hover:scale-[1.3] duration-500 transition 0.3s'/>
          </a>
        </div>
        <div className='git h-[45px] w-[45px] rounded-full flex items-center justify-center'>
          <a className='pointer' href="https://github.com/aliumair00">
            <BsGithub className='text-[35px] font-bold hover:scale-[1.3] duration-500 transition 0.3s'/>
          </a>
        </div>
        <div className='git h-[45px] w-[45px] rounded-full flex items-center justify-center'>
          <a className='pointer' href="https://www.instagram.com/ali_hun_beyy/?hl=en">
            <FaInstagram className='text-[35px] font-bold hover:scale-[1.3] duration-500 transition 0.3s'/>
          </a>
        </div>
      </div>
      <h1 className='text-[50px] tracking-[2px] font-bold items-center'>
        <span className='intro'>I'm Ali Umair,</span>MERN STACK DEVELOPER.
      </h1>
      <p className='ml-[5vw] mt-[10px] leading-loose items-center text-[18px]'>
        I am a MERN stack developer specializing in dynamic web applications. With expertise in MongoDB, Express.js, React, and Node.js,<br/> 
        I create innovative solutions and maintainable code. Let's connect and build something amazing together!
      </p>
      <div className='hero-action mt-[30px] mr-18 items-center gap-[25px] flex'>
        <AnchorLink href='#contact' offset={50}>
          <button className='contactBtn'>Connect with me</button>
        </AnchorLink>
        <a href="/public/CV.pdf" download>
          <button className='resumeBtn pointer'>My resume</button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
