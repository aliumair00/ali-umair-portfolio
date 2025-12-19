import React, { useState } from 'react'
import theme_pattern from '/src/assets/theme_pattern.svg'
import dp from "/public/dp.jpg"
import { motion } from 'framer-motion';

const About = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="about"
      className="flex flex-col items-center justify-center max-w-6xl mx-auto my-32 px-5 gap-20"
    >

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex items-center justify-center"
      >
        <h1 className="text-5xl md:text-6xl font-semibold px-6">About Me</h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute -z-10 bottom-0 right-[27vw] w-24 md:w-40 md:left-[10vw]"
        />
      </motion.div>

      {/* Section */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full hidden md:block md:w-1/3 h-80 md:h-[450px] overflow-hidden rounded-2xl relative group perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="w-full h-full transition-transform duration-200 ease-out shadow-2xl rounded-2xl overflow-hidden bg-[#1f1f1f] border-2 border-[#b415ff]/20"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <img
              src={dp}
              alt="About"
              className="object-cover w-full h-full transform scale-100 group-hover:scale-100 transition-transform duration-500 "
              style={{ objectPosition: "50% 50%" }}
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-10 md:w-1/2"
        >

          <div className="flex flex-col gap-4 text-base font-medium leading-relaxed">
            <p>
              I am an experienced Mern Stack Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
            </p>
            <p>
              My passion for Mern Stack  development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-4">
            {[
              { name: 'HTML & Tailwind CSS', width: 'w-[100%]' },
              { name: 'Javascript', width: 'w-[80%]' },
              { name: 'React.js', width: 'w-[80%]' },
              { name: 'Express.js', width: 'w-[75%]' },
              { name: 'Node.js', width: 'w-[75%]' },
            ].map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-5 hover:scale-105 transition-transform duration-300"
              >
                <p className="min-w-[120px] text-[17px] font-medium">{skill.name}</p>
                <div className="flex-1">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                    className="h-[7px] rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] origin-left"
                    style={{ width: skill.width.replace("w-[", "").replace("]", "") }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Achievements */}
      <div className="flex flex-col md:flex-row justify-around items-center w-full gap-10 mt-10">
        {[
          { number: '2+', text: 'YEARS OF EXPERIENCE' },
          { number: '5+', text: 'PROJECTS COMPLETED' },
          { number: '10+', text: 'HAPPY CLIENTS' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="flex flex-col items-center text-center hover:scale-110 transition-transform duration-300"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent mb-2">
              {item.number}
            </h1>
            <p className="text-sm md:text-base ">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default About
