"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Portfolio.scss';

function Parallax1() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Adjust the initial values and output range to control the animation
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '350%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const xBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  return (
    <div className="Portfolio">
      <motion.h1 style={{ y: yText, transition:"duration:2 " }}>What We Did?</motion.h1>
      <motion.div className="mountains1"></motion.div>
      <motion.div className="planets1" style={{ x: yBg, backgroundImage: 'url(/sun.png)' }}></motion.div>
      <motion.div style={{ y: xBg, zIndex: 1, transition:" ease: 'easeIn'"  }} className="stars1"></motion.div>
    </div>
  );
}

export default Parallax1;
