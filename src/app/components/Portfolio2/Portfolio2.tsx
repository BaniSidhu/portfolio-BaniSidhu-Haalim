"use client"
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './Portfolio2.scss';

interface Item {
  id: number;
  title: string;
  img: string;
  description: string;
}
const items: Item[] =[
    {
        id: 1,
        title :"NextJs ",
        img:"/program.jpg",
        description:" A website developed in Next.js boasts several advantages, including efficient performance, seamless navigation, and enhanced user experiences. Leveraging the benefits of server-side rendering and automatic code splitting, the site loads quickly and provides a smooth browsing experience. The modular structure of Next.js components facilitates code organization and maintenance, ensuring scalability as the website grows. Overall, a Next.js-powered website delivers a modern, high-performance , and maintainable solution for a wide range of web applications. "

    },
    {
        id: 2,
        title :"FAB Tech ",
        img:"/3.jpg",
        description:"Be Exclusive, Be Devine ,Be Graceful .FABTech is Faisalabad top Software house which focus on developing your skills .Mobile App, Cyber Security, SEO,Full Stack Development, Social Media Marketing & Graphical Designing   " 

    },
    {
        id: 3,
        title :"Namal App ",
        img:"/program2.webp",
        description:"Namal, the innovative website and app for educational purposes, offers a user-friendly platform tailored for effective studying. With its intuitive interface and diverse study resources, Namal empowers learners to access quality educational content, making the pursuit of knowledge a seamless and enriching experience."

    },
    {
        id: 4,
        title :"UAF ",
        img:"/UAF.jpg",
        description:"The University of Agriculture Faisalabad (UAF) is a prestigious institution in Pakistan, renowned for its excellence in agricultural and related sciences. With a rich history and commitment to research, UAF plays a vital role in advancing agricultural practices and fostering education for sustainable development."

    }
];

const Single: React.FC<{ item: Item }> = ({ item }) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset:["start start","end start"]
    });

    const y= useTransform(scrollYProgress, [0, 1], ["0%", "-500%"]);

    return (
        <section ref={ref}>
            <div className="container3 ">
                <div className="wrapper">
                    <div className="ImageContainer3">
                <img src={item.img} alt="" className='ImgName'/>
                </div>
                <motion.div className="textContainer3" style={{y}} >

                    <motion.h2 className='heading2'> {item.title} </motion.h2>
                    <p>{item.description}</p>
                    <motion.button  whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} >
        See Demo</motion.button>
                </motion.div>
                </div>
            </div>
        </section>
    );
}
   
function Portfolio2() {
    const ref = useRef<HTMLDivElement>(null);  
    // const scaleX = useSpring(0, { stiffness: 100, damping: 30 });

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    
  return (
    <>
    
    <div className="Portfolio2"ref={ref} >
       <div className="progress" >
        <h1 className='progressText'>Featured Work</h1>
       
                    <motion.div style={{ scaleX}} className="progressBar" ></motion.div>
                </div>
                {items.map(item => (
                    <Single item={item} key={item.id} />
                ))}
    </div>
</>
  )
}

export default Portfolio2
