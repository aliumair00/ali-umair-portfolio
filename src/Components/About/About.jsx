import React from "react";
import "./about.css";
import theme_pattern from "/src/assets/theme_pattern.svg";

const About = () => {
  return (
    <div id="about" className="about flex relative">
      <div className="about-tittle relative">
        <h1 className="py-[25px] font-bold text-[80px]">About me</h1>
        <img
          className="absolute bottom-0 -right-8 top-14 z-[-1]"
          src={theme_pattern}
          alt=""
        />
      </div>
      <div className="about-sec flex gap-[55px]">
        <div className="about-left">
          <img  className="aboutImg scale-[1.8]" src="/public/about.jpeg" alt="" />
        </div>
        <div className="about-right flex flex-col gap-[65px]">
          <div className="paragraph flex flex-col gap-[12px] font-medium text-[18px]  ">
            <p className="tracking-wide ">
              I am an experienced MERN Stack Developer with over a decade of
              expertise. Throughout my career, I've had the privilege of working
              with prestigious organizations, contributing to their success and
              growth.
            </p>
            <p>
              My passion for MERN stack development is evident in both my
              extensive experience and the enthusiasm and dedication I bring to
              each project.
            </p>
          </div>
          <div className="about-skills flex flex-col -mt-5 gap-[12px] pr-36">
            <div className="about-skill relative transition 0.3s hover:scale-[1.05] ">
              <p>HTML & CSS</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill relative transition 0.3s hover:scale-[1.05]  ">
              <p>Javascript</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill relative  transition 0.3s hover:scale-[1.05] ">
              <p>React.js</p> <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill relative transition 0.3s hover:scale-[1.05]  ">
              <p>Express.js</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill relative  transition 0.3s hover:scale-[1.05]  ">
              <p>Node.js</p> <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements flex items-center justify-around w-[100%] mb-[80px] transition 0.5s ">
        <div className="about-achievement flex flex-col items-center hover:scale-[1.]   ">
          <h1 className="font-bold mb-2">2+</h1>
          <p className="font-medium">YEARS OF EXPERIENCE</p>
        </div>
        <hr className="w-[2px] h-[90px] bg-white mx-4" />
        <div className="about-achievement flex flex-col items-center hover:scale-[1.1]  ">
          <h1 className="font-bold mb-2">5+</h1>
          <p className="font-medium">PROJECTS COMPLETED</p>
        </div>
        <hr className="w-[2px] h-[90px] bg-white mx-4  " />
        <div className="about-achievement flex flex-col items-center hover:scale-[1.1]  ">
          <h1 className="font-bold mb-2">10+</h1>
          <p className="font-medium">HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;