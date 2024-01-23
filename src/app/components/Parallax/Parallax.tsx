"use client"
import React, { useRef } from 'react'
import "./Parallax.scss"
import {motion,useScroll,useTransform} from "framer-motion"

function Parallax(props:any) {
  const ref = useRef()
  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["start start" ,"end start"]
  })
  const yText=useTransform(scrollYProgress,[0,1],["0%","300%"])
  const yBg=useTransform(scrollYProgress,[0,1],["0%","40%"])
  return (
    <>
    
    <div className="Parallax" style={{background:props.type==="Services" ?"linear-gradient(180deg, #0c0c1d, #111132)" : 
    "linear-gradient(180deg, #505064, #111132)"}}>
        <motion.h1 style={{y:yText}}>{props.type==='Services'? "What We Do?": "What We Did"}</motion.h1>
        <motion.div  className="mountains"></motion.div>
        <motion.div  className="planets" style={{
        x:yBg,  backgroundImage:`url(${props.type==="Services"?"/planets.png" :"/sun.png" })`
        }}></motion.div>
        <motion.div style={{y:yBg ,zIndex:1}} className="stars"></motion.div>
    </div>
    
    
    </>
  )
}

export default Parallax
