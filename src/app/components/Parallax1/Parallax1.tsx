"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Parallax1.scss';

function Parallax1() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const { scrollXProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '400%']);
  const xBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="Parallax1 ">
      <motion.h1 style={{ y: yText }}>What We Do?</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ x: xBg, zIndex: 1 }} className="stars"></motion.div>
      <motion.div className="planets" style={{ y: yBg, backgroundImage: 'url(/planets.png)' }}></motion.div>
     
    </div>
  );
}

export default Parallax1;
