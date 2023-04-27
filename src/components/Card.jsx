import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Card({ image, onClick }) {
  const [isForward, setIsForward] = useState(false);

  const handleClick = () => {
    setIsForward(true);
    onClick && onClick();
  };

  return (
    <div className='cursor-pointer xl:h-72' onClick={handleClick}>
      {isForward ? (
        <img
          src={image}
          alt='forward'
          height={384}
          width={256}
          className='w-[16rem] h-full object-cover rounded-lg'
        />
      ) : (
        <img
          src='/deck_2_large.png'
          height={384}
          width={256}
          className='w-[16rem] h-full rounded-lg'
          alt='backout'
        />
      )}
    </div>
  );
}

Card.DefaultProps = {
  isForward: true,
  onClick: () => {},
};

Card.propTypes = {
  isForward: PropTypes.bool,
  image: PropTypes.string,
  onClick: PropTypes.func,
};
