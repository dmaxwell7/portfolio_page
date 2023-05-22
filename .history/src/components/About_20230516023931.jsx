import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
            options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12
          min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img 
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex justify-center justify-evenly'
      >
        As a Software Developer, I bring not only technical skills but also a diverse background in athletics. 
        I have a notable athletic career, having earned recognition as a two-time collegiate all-conference football player. 
        Furthermore, I had the privilege of being a member of the Chicago Bears and New York Giants for a period of time. 
        This experience instilled in me invaluable qualities such as discipline, teamwork, and perseverance, which seamlessly 
        integrate into my approach to software development. Together, we can leverage this unique blend of skills to create 
        innovative solutions that surpass expectations and overcome real-world challenges.

      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}
// 1:11:28
export default SectionWrapper(About, 'about');