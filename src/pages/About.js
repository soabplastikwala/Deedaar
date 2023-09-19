import React,{useContext} from 'react';
import WomanImg from '../img/about/woman.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageTransition } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const { mouseEnterHandler,mouseLeaveHandler}= useContext(CursorContext);

  return (
    <section 


    className='section'>
      <div
      
      
      className='container mx-auto h-full relative'
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}>
        
        <div className='flex flex-col lg:flex-row h-full items-center
         justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          <motion.div
              

       
    
          // Wrap the div in motion.div for animation
            className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'
            initial={{ opacity: 0, x: -100 }} // Initial animation state
            animate={{ opacity: 1, x: 0 }} // Animation when in view
            exit={{ opacity: 0, x: 100 }} // Animation when exiting view
            transition={{ duration: 0.5, ease: 'easeOut' }} // Animation properties
          >
            <motion.img
              src={WomanImg}
              alt=''
           
              whileHover={{ scale: 1.1 }} // Scale up the image on hover
              style={{ cursor: 'pointer' }} // Change cursor on hover
            />
          </motion.div>
          <motion.div // Wrap the div in motion.div for animation
            className='flex-1 pt-36 pb-14 lgpt-0 lg:w-auto z-10 flex-col justify-center items-center lg:items-start'
            initial={{ opacity: 0, x: -80 }} // Initial animation state
            animate={{ opacity: 1, x: 0 }} // Animation when in view
            exit={{ opacity: 0, x: -80 }} // Animation when exiting view
            transition={{ duration: 0.5, ease: 'easeOut' }} // Animation properties
          >
            <h1 className='h1'>About me</h1>
            <p className='mb-12 mxa-w-sm'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Obcaecati <b>ipsa soluta</b> sed fugit atque,
               doloribus <b>ipsa soluta</b> reprehenderit
                ipsa soluta repellendus similique non.
            </p>
            <br />
            <br />
            <p>Lorem ipsum dolor sit amet consectetur
               adipisicing elit. 
              Deserunt cupiditate neque, illum dicta 
              debitis quia et labore aliquid 
              repellat in vitae eligendi pariatur.</p>
            <Link to={'/portfolio'} className='btn'>View my work</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
