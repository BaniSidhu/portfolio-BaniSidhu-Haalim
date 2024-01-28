"use client"
import React from 'react'
import "./Contact.scss"

import { useEffect ,useRef} from 'react'
import { motion, useViewportScroll, useAnimation } from "framer-motion";

const variants: any = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
        staggerChildren: 1.5
    }
};
function Contact() {
    const { scrollY } = useViewportScroll(); // Track scroll position
    const contactControls = useAnimation(); // Controls animation

    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (contactRef.current) {
                // Trigger animation if contact div is visible
                if (scrollY.get() >= contactRef.current.offsetTop) {
                    contactControls.start("animate");
                }
            }
        };

        // Reset animation on component mount
        contactControls.start("initial");

        // Run handleScroll initially
        handleScroll();

        // Add event listener
        const scrollListener = scrollY.onChange(() => handleScroll());

        return () => {
            // Remove event listener
            scrollListener();
        };
    }, [scrollY, contactControls, contactRef]);
  return (
<>

<motion.div className='contact'variants={variants} initial="initial" animate={contactControls} ref={contactRef}


>

<motion.div className="textContainer4" variants={variants}>
    <motion.div className='content' variants={variants} >
        <h2>Lets work  </h2>
        <h2>Lets work </h2>
        
        
        </motion.div>
        <br />
    <motion.div className="item4">
        <h2>Mail</h2>
        <span>banisidhu193@gmail.com</span>
    </motion.div>
    <motion.div  variants={variants} className="item4">
        <h2>Address</h2>
        <span>P#994 Main street 2 London,UK</span>
    </motion.div>
    <motion.div  variants={variants} className="item4">
        <h2>Phone</h2>
        <span>0309-4025193</span>
    </motion.div>
</motion.div>
<div className="formContainer4">
<input type="text" name="" id="" required placeholder='Name'/>
<input type="email" name="" id="" required placeholder='Email'/>
<textarea  rows={10} placeholder='Message'></textarea>
<button>Submit</button>
</div>
</motion.div>

</>
  )
}

export default Contact
