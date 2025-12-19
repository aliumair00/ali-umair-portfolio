import React, { useState } from 'react'
import mywork_data from '../../assets/mywork_data'
import theme_pattern from '../../assets/theme_pattern.svg'
import { motion } from 'framer-motion';

const Websites = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine how many items to show
  const displayData = showAll ? mywork_data : mywork_data.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full flex justify-center px-4 sm:px-5 md:px-6 lg:px-8 py-0 relative'
    >
      <div className='w-full max-w-7xl flex flex-col items-center relative'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='mb-16 sm:mb-20 mt-[5vh] relative flex items-center justify-center  w-full '
        >
          <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center'>My Latest work</h1>
          <img
            className="theme w-[85px] absolute top-[10px] right-[90px] z-[-2] md:w-[180px] md:right-[30%] md:top-2  "
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
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full max-w-7xl'
        >
          {displayData.map((work, index) => (
            <motion.a
              key={index}
              href={work.w_link}
              target='_blank'
              rel='noopener noreferrer'
              className='contents'
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                className='h-56 sm:h-60 md:h-64 lg:h-72 w-full object-contain bg-[#1c1c24] border-[1px] border-transparent rounded-xl transition-all duration-300 ease-in-out hover:border-4 hover:border-[#FF00FF]'
                src={work.w_img}
                alt=""
              />
            </motion.a>
          ))}
        </motion.div>

        {mywork_data.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='flex justify-center mt-8 sm:mt-10 md:mt-12'
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className='px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 bg-blue-600 text-white rounded-lg font-medium transition-colors duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default Websites;
