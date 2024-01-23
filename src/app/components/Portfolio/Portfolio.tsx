"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Portfolio.scss';

function Parallax1() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Adjust the initial values and output range to control the animation
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '300%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
  const xBg = useTransform(scrollYProgress, [0, 1], ['0%', '55%']);

  return (
    <div className="Portfolio">
      <motion.h1 style={{ y: yText }}>What We Did?</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ x: yBg, backgroundImage: 'url(/sun.png)' }}></motion.div>
      <motion.div style={{ y: xBg, zIndex: 1 }} className="stars"></motion.div>
    </div>
  );
}

export default Parallax1;
