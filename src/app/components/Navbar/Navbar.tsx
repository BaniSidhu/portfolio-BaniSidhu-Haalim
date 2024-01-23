"use client"
import Sidebar from '../Sidebar/Sidebar'
import React from 'react'
import "./Navbar.scss"
import Link from 'next/link'
import {motion} from "framer-motion"
function Navbar() {
  return (
   <> 
   <div className="navbar">
  
   <div className="wrapper">
   <Sidebar/>
    <motion.span initial={{opacity:0,scale:0.5}}
    transition={{duration:0.5}}
    animate={{opacity:1,scale:1}} className='textHaalim'>Haalim</motion.span>
    <div className="social">
<motion.a initial={{opacity:0,scale:0.5}} 
transition={{duration:0.5}} 
animate={{opacity:1,scale:1}} href="#"><img src="/facebook.png" alt="" /></motion.a>
<motion.a initial={{opacity:0,scale:0.5}} 
transition={{duration:0.5}} 
animate={{opacity:1,scale:1}} href="#"><img src="/instagram.png" alt="" /></motion.a>
<motion.a initial={{opacity:0,scale:0.5}} 
transition={{duration:0.5}} 
animate={{opacity:1,scale:1}} href="#"><img src="/youtube.png" alt="" /></motion.a>
    </div>
   </div>
   </div>
   </>

  )
}

export default Navbar
