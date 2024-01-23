"use client"
import React from 'react'
import {motion} from "framer-motion"
 const textVariants={
  initial:{
    x:-500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1
    },
  },
  scrollButton:{
    opacity:1,
    y:5,
    transition:{
      duration:1,
      repeat:Infinity
    }  }


}
 const sliderVariants={
  initial:{
    x:0,
    
  },
  animate:{
    x:"220%",
    opacity:1,
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:4,
      staggerChildren:0.1
    },
  }  }



import "./Hero.scss"
import { animate } from 'framer-motion'
function Hero() {
  return (
   <>
   <div className="hero">
    <div className="wrapper">

    <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
      <motion.h2 variants={textVariants}>
        CH.Bassam Tanvir
      </motion.h2>
      <motion.h1 variants={textVariants}>  MERN & NEXT JS Developer</motion.h1>
      <div className="buttons">
        <motion.button variants={textVariants}>Visit My Profile</motion.button>
        <motion.button variants={textVariants}>Contact Me</motion.button>
      </div>
      <motion.img src="/scroll.png" alt="" animate="scrollButton" variants={textVariants} />
    </motion.div>
    </div>
    <motion.div className="slidingTextContainer" variants={sliderVariants} initial=" initial" animate="animate">
      Software  Engineer
    </motion.div>
<div className="imageContainer">
  <motion.img src="/Bani2.png" alt="" initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} transition={{duration:4}}/>
</div>
   </div>
   
   </>
  )
}

export default Hero
