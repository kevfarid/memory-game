import PropTypes from 'prop-types';
import cn from 'classnames';
import { useEffect, useState } from 'react';

export default function Score({ score, type, name }) {
  const [showBgColor, setShowBgColor] = useState(false);

  useEffect(() => {
    if (score === 0) return;

    setShowBgColor(true);
    const timer = setTimeout(() => {
      setShowBgColor(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div
      className={cn(
        'text-gray-500 px-6 py-1 rounded-md shadow-inner inline-flex items-center gap-4',
        'transition-colors duration-300 ease-in-out',
        {
          'bg-emerald-500': type === 'points' && showBgColor,
          'bg-red-500': type === 'errors' && showBgColor,
          'bg-white': !showBgColor,
          'text-white': showBgColor,
        }
      )}
    >
      <span className='text-sm font-medium'>{name}</span>
      <span
        className={cn('text-xl font-bold', {
          'text-emerald-500': type === 'points' && !showBgColor,
          'text-red-500': type === 'errors' && !showBgColor,
        })}
      >
        {score}
      </span>
    </div>
  );
}

Score.defaultProps = {
  type: 'points',
  score: 0,
};

Score.propTypes = {
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(['points', 'errors']),
  name: PropTypes.string,
};
