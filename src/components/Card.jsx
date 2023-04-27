import PropTypes from 'prop-types';
import cn from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

export default function Card({ isForward, image, onClick, disabled, ...props }) {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div
      className={cn('h-full', {
        'cursor-pointer': onClick && !isForward,
        'opacity-60': disabled,
      })}
      onClick={handleClick}
      {...props}
    >
      <AnimatePresence>
        {isForward && (
          <motion.img
            src={image}
            alt='forward'
            height={384}
            width={256}
            className='w-[16rem] h-full object-cover rounded-lg border-4 border-slate-100'
            initial={{
              rotateY: 180,
            }}
            animate={{
              rotateY: 0,
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isForward && (
          <motion.img
            src='/deck_2_large.png'
            height={384}
            width={256}
            className='w-full h-full rounded-lg object-cover border-4 border-slate-100'
            alt='backout'
            initial={{
              rotateY: 180,
            }}
            animate={{
              rotateY: 0,
            }}
          />
        )}
      </AnimatePresence>
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
  disabled: PropTypes.bool,
};
