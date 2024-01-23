import React from 'react';
import {motion} from "framer-motion"

function ToggleButton(props: any) {
  return (
    <>
      <button onClick={() => props.setOpen((prev: any) => !prev)}>
        <div className='flex justify-center items-center'>
        <svg  width="23" height="23" viewBox='0 0 23 23'>
          <motion.path d="M2 5h19M2 12h19M2 19h19" strokeWidth="3" stroke='black' strokeLinecap='round'
          />
        </svg>
        </div>
      </button>
    </>
  );
}

export default ToggleButton;
