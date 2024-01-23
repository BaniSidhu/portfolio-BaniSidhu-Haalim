// LinksOp.js
'use client'
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: 50,
  },
};

function LinksOp() {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div variants={variants}>
      {items.map((item, index) => (
        <motion.div key={item} variants={itemVariants}>
          <Link href={`#${item}`} className="link-item">
            {item}
          </Link>
          <br />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default LinksOp;
