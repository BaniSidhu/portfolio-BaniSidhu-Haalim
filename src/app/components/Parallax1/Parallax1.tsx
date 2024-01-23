"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Parallax1.scss';

function Parallax1() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="Parallax1 ">
      <motion.h1 style={{ y: yText }}>What We Do?</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ x: yBg, backgroundImage: 'url(/planets.png)' }}></motion.div>
      <motion.div style={{ y: yBg, zIndex: 1 }} className="stars"></motion.div>
     
    </div>
  );
}

export default Parallax1;
