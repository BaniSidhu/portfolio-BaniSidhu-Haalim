// Sidebar.js
import React from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import LinksOp from '../LinksOp/LinksOp';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Sidebar.scss';

function Sidebar() {
  // Get the initial state from local storage, defaulting to false if not present
  const initialOpenState = JSON.parse(localStorage.getItem('sidebarOpen')) || false;

  const [open, setOpen] = useState(initialOpenState);

  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px)',
      transition: {
        type: 'spring',
        stiffness: 40,
        damping: 40,
      },
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  // Update local storage when the state changes
  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(open));
  }, [open]);

  return (
    <>
      <motion.div className="Sidebar" animate={open ? 'open' : 'closed'}>
        <motion.div className="bg" variants={variants}>
          <div className="linksOp">
            <LinksOp />
          </div>
          <ToggleButton setOpen={setOpen}></ToggleButton>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Sidebar;
