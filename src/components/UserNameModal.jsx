import PropTypes from 'prop-types';

import Modal from './Modal';
import { AnimatePresence } from 'framer-motion';

export default function UserNameModal({ show, onSubmit }) {
  return (
    <AnimatePresence>
      {show && (
        <Modal>
          <div className='flex p-16 flex-col gap-4 items-center justify-center'>
            <p className='text-lg text-gray-500 mb-4'>
              Please enter your name to start the game
            </p>
            <form
              onSubmit={onSubmit}
              className='flex flex-col justify-center items-center gap-5 w-full'
            >
              <input
                type='text'
                className='w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Enter your name'
                name='username'
                id='username'
              />
              <input
                placeholder='Start'
                className='text-2xl font-bold text-blue-500 hover:text-blue-600 hover:bg-slate-200 px-4 py-1 rounded-md cursor-pointer'
                type='submit'
                value='Start'
              />
            </form>
          </div>
        </Modal>
      )}
    </AnimatePresence>
  );
}

UserNameModal.defaultProps = {
  show: false,
};

UserNameModal.propTypes = {
  show: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};
