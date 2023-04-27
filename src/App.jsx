import { useEffect, useState } from 'react';
import useSound from 'use-sound';

import Card from './components/Card';
import Score from './components/Score';

import IconVolume from './components/icons/Volume';
import IconMuted from './components/icons/Muted';

import useGame from './hooks/useGame';

function App() {
  const [isMuted, setIsMuted] = useState(false);

  const { cards, cardList, animals, score, onClickCard } = useGame();

  const [play] = useSound('/sounds/Wholesome.mp3', {
    volume: isMuted ? 0 : 0.4,
    interrupt: false,
  });

  useEffect(() => {
    play();
  }, [play]);

  return (
    <main className='w-full h-screen flex flex-col justify-center items-center m-auto max-w-7xl gap-4 px-8'>
      <img src='/icon.png' alt='logo' className='w-80' />
      <div className='flex gap-2 w-full justify-end'>
        <button
          className='hover:bg-slate-100/30 p-2 rounded-full hover:text-slate-600'
          role='button'
          aria-roledescription='volume'
          onClick={() => setIsMuted((prev) => !prev)}
        >
          {isMuted ? (
            <IconMuted className='w-6 h-6' />
          ) : (
            <IconVolume className='w-6 h-6' />
          )}
        </button>
        <Score score={score.points} name='Points' />
        <Score type='errors' score={score.erros} name='Errors' />
      </div>
      <div className='grid grid-cols-auto-fill xl:grid-cols-6 gap-5 w-full overflow-auto relative'>
        {cardList.map((card, index) => (
          <Card
            isForward={cards[card]?.includes(index)}
            key={`card-${index}`}
            image={animals[card - 1]}
            onClick={() => onClickCard(card, index)}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
