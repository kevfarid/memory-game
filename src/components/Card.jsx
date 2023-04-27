import PropTypes from 'prop-types';
import cn from 'classnames';

export default function Card({ isForward, image, onClick, ...props }) {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div
      className={cn('h-full xl:h-72', {
        'cursor-pointer': onClick && !isForward,
      })}
      onClick={handleClick}
      {...props}
    >
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
          className='w-[16rem] h-full rounded-lg object-cover'
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
