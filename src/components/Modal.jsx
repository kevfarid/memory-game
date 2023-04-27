import PropTypes from 'prop-types';

import { motion } from 'framer-motion';
import Portal from './Portal';

export default function Modal({ children }) {
  return (
    <Portal>
      <motion.div
        className='absolute top-0 bg-blue-500/70 backdrop-blur-sm text-black w-full h-full xl:p-0 p-8 rounded-lg flex items-center justify-center'
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
        <div className='bg-white rounded-md flex overflow-hidden items-center justify-center gap-8'>
          {children}
        </div>
      </motion.div>
    </Portal>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
