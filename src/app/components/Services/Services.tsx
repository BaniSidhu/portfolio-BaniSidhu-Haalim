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
    const ref = useRef<HTMLDivElement>(null);
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
            <h1><b>Unique </b> Ideas</h1>
            
        
           </div>
          <div className="title1">

           <h1><b>For Your </b> Websites</h1>
           <button>What We Do?</button>
          </div>
      
    </motion.div>
    <motion.div className="listContainer1" variants={variants}>
        <motion.div className="box1"  whileHover={{background:"lightgray" ,color:"black"}}>
            <h2>Courses</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda voluptates enim delectus sequi minima voluptatum quos dolor veniam? Eos dicta inventore, non eum provident voluptatibus culpa fuga, voluptate excepturi sequi laborum, dolorem neque.
            </p>
            <br />
            <button>Go</button>
        </motion.div>
        <motion.div className="box1" whileHover={{background:"lightgray" ,color:"black"}}>
            <h2>Courses</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda voluptates enim delectus sequi minima voluptatum quos dolor veniam? Eos dicta inventore, non eum provident voluptatibus culpa fuga, voluptate excepturi sequi laborum, dolorem neque.
            </p><br />
            <button>Go</button>
        </motion.div>
        <motion.div className="box1"  whileHover={{background:"lightgray" ,color:"black"}}>
            <h2>Courses</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda voluptates enim delectus sequi minima voluptatum quos dolor veniam? Eos dicta inventore, non eum provident voluptatibus culpa fuga, voluptate excepturi sequi laborum, dolorem neque.
            </p><br />
            <button>Go</button>
        </motion.div>
        <motion.div className="box1"  whileHover={{background:"lightgray" ,color:"black"}}>
            <h2>Courses</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda voluptates enim delectus sequi minima voluptatum quos dolor veniam? Eos dicta inventore, non eum provident voluptatibus culpa fuga, voluptate excepturi sequi laborum, dolorem neque.
            </p><br />
            <button>Go</button>
        </motion.div>
    </motion.div>
 </motion.div>
 
 </>
  )
}

export default Services
