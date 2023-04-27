import PropTypes from 'prop-types';

export default function Modal({ children }) {
  return (
    <div className='absolute bg-blue-500/70 backdrop-blur-sm text-black w-full h-full xl:p-0 p-8 rounded-lg flex items-center justify-center'>
      <div className='p-16 bg-white rounded-md flex overflow-hidden items-center justify-center gap-8'>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
