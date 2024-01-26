"use client"
import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

// import Observer from '@researchgate/react-intersection-observer';
import "./Services.scss"
const variants={
    initial:{
      x:-500,
      y:100,
      opacity:0
    },
    animate:{
      x:0,
      opacity:1,
      y:0,
      transition:{
        duration:1,
        staggerChildren:0.1
      },
    },
}

function Services() {
    const [isInView, setIsInView] = useState(false);
    const controls = useAnimation();
    let ref:any = useRef<HTMLDivElement>(null);
    // const [inViewRef, inView] = useInView();
    const [scrollY, setScrollY] = useState();
    const [inViewRef, inView] = useInView({ threshold: 0.5, rootMargin: '50px 0px' });

    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  
    useEffect(() => {
      if (inView) {
        setIsInView(true);
        controls.start("animate");
      } else {
        // Reset the animation when the element goes out of view
        controls.start("initial");
      }
    }, [inView, controls]);

   
    // useEffect(() => {
    //     const handleScroll = () => {
    //       setScrollY(window.scrollY);
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    //   }, []);
      useEffect(() => {
        window.addEventListener('resize', () => {
          setViewportHeight(window.innerHeight);
        });
        return () => window.removeEventListener('resize', () => {});
      }, []);
     

      
  
  return (
 <>
 <motion.div className='services ' 
//  whileInView="animate"
variants={variants}
animate={controls}
ref={(element) => {
  inViewRef(element);
  ref.current = element;
}}
 >
    <motion.div className="textContainer1" variants={variants}> 
    <p>We focus on creating eye caughting websites <br /> to grow & move forward</p>
    <hr />
    </motion.div>
    <motion.div className="titleContainer1" variants={variants}>

        <div className="title1">
            <img src="/people.webp" alt="" />
            <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique </motion.b> Ideas
            </h1>
            
        
           </div>
          <div className="title1">

           <h1><motion.b whileHover={{color:"orange"}}>For Your </motion.b> Websites</h1>
           <button>What We Do?</button>
          </div>
      
    </motion.div>
    <motion.div className="listContainer1" variants={variants}>
        <motion.div className="box1"  whileHover={{background:"lightgray" ,color:"black"}}>
            <h2>Courses</h2>
            <p>
              
Haalim, the cutting-edge software house, not only develops innovative solutions but also empowers professionals with diverse courses, ranging from Java,Python,TypeScript full-stack development to cybersecurity & SEO. With a commitment to skill-building, Haalim ensures individuals stay at the forefront of technology.
            </p>
            <br />
            <button>Go</button>
        </motion.div>
        <motion.div className="box1" whileHover={{background:"lightgray" ,color:"black"}}>
            <h2>InternShip</h2>
            <p>
              
Haalim Software offers dynamic internship opportunities, providing aspiring professionals with hands-on experience in the realms of software development, cybersecurity, and more. With mentorship from industry experts, Haalim's internships pave the way for skill development and real-world application in the ever-evolving landscape of technology.
            </p><br />
            <button>Go</button>
        </motion.div>
        <motion.div className="box1"  whileHover={{background:"lightgray" ,color:"black"}}>
            <h2>Consultancy Service</h2>
            <p>
            Consultancy services play a pivotal role in guiding organizations through strategic decision-making and problem-solving.Consultants provide tailored insights, helping businesses optimize processes, adopt  technologies, and navigate challenges. Their expertise spans various industries, contributing to enhanced efficiency, innovation.       </p><br />
            <button>Go</button>
        </motion.div>
        <motion.div className="box1"  whileHover={{background:"lightgray" ,color:"black"}}>
            <h2>Courses</h2>
            <p>

            Collaboration and networking in a software house foster industry connections, enabling knowledge exchange, potential partnerships, and a broader ecosystem for staying at the forefront of technological advancements.            </p><br />
            <button>Go</button>
        </motion.div>
    </motion.div>
 </motion.div>
 
 </>
  )
}

export default Services
