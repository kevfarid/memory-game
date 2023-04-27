import PropTypes from 'prop-types';

import { motion } from 'framer-motion';

export default function Modal({ children }) {
  return (
    <motion.div
      className='absolute bg-blue-500/70 backdrop-blur-sm text-black w-full h-full xl:p-0 p-8 rounded-lg flex items-center justify-center'
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <div className='p-16 bg-white rounded-md flex overflow-hidden items-center justify-center gap-8'>
        {children}
      </div>
    </motion.div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
