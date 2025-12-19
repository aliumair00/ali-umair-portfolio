import React from 'react'
import theme_pattern from '/src/assets/theme_pattern.svg'
import Services_Data from '/src/assets/services_data.js'
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="services"
      className="services flex flex-col gap-[65px] max-w-[1400px] mx-auto my-[100px] px-[20px]"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='mb-16 sm:mb-20 mt-[5vh] relative flex items-center justify-center  w-full '
      >
        <h1 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center'>Services</h1>
        <img
          className="theme w-[120px] absolute top-4 left-[45%] z-[-4] md:w-[200px] md:top-1  "
          src={theme_pattern}
          alt=""
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {}
        }}
        className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {Services_Data.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="service-card bg-[#1a1a1a] p-8 rounded-xl border-2 border-[#2d2d2d] hover:border-[#b415ff] transition-all duration-300 hover:scale-105"
          >
            <div className="service-number text-[48px] font-bold text-gray-600 mb-4">
              {service.s_no}
            </div>
            <h3 className="service-name text-[24px] font-bold mb-4 text-white">
              {service.s_name}
            </h3>
            <p className="service-desc text-gray-400 leading-relaxed">
              {service.s_desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services