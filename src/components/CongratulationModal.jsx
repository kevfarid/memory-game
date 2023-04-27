import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import Modal from './Modal';

export default function CongratulationModal({ show, username, onClick }) {
  return (
    <AnimatePresence>
      {show && (
        <Modal>
          <div className='flex flex-col w-96 gap-4 items-center justify-center relative pb-4'>
            <div className='w-full h-44 rounded-t-none rounded-b-full bg-blue-500 overflow-clip'>
              <img
                src='/undraw_winners.png'
                alt='winners'
                className='w-full h-full object-cover'
              />
            </div>
            <img
              src='/medal.png'
              alt='logo'
              className='absolute w-36 top-1/4'
            />
            <div className='text-xl text-center mt-16 relative'>
              <h1 className='text-4xl font-bold'>Congratulations!</h1>
              <p className='text-lg text-gray-500 mb-4'>{username}</p>
              <button
                className='text-2xl font-bold text-blue-500 hover:text-blue-600'
                onClick={onClick}
              >
                Play again
              </button>
            </div>
          </div>
        </Modal>
      )}
    </AnimatePresence>
  );
}

CongratulationModal.defaultProps = {
  show: false,
  username: '',
  onClick: () => {},
};

CongratulationModal.propTypes = {
  show: PropTypes.bool,
  username: PropTypes.string,
  onClick: PropTypes.func,
};
