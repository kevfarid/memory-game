import PropTypes from 'prop-types';

import IconMuted from './icons/Muted';
import IconVolume from './icons/Volume';

export default function VolumeButton({ setVolume, isMuted }) {
  return (
    <button
      className='hover:bg-slate-100/30 p-2 rounded-full hover:text-slate-600'
      role='button'
      aria-roledescription='volume'
      onClick={setVolume}
    >
      {isMuted ? (
        <IconMuted className='w-6 h-6' />
      ) : (
        <IconVolume className='w-6 h-6' />
      )}
    </button>
  );
}

VolumeButton.defaultProps = {
  setVolume: () => {},
  isMuted: false,
};

VolumeButton.propTypes = {
  setVolume: PropTypes.func,
  isMuted: PropTypes.bool,
};
