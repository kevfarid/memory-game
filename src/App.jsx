import { useEffect, useState } from 'react';
import useSound from 'use-sound';

import Card from './components/Card';
import Score from './components/Score';

import IconVolume from './components/icons/Volume';
import IconMuted from './components/icons/Muted';

import useGame from './hooks/useGame';
import CongratulationModal from './components/CongratulationModal';
import UserNameModal from './components/UserNameModal';
import cn from 'classnames';

function App() {
  const [isMuted, setIsMuted] = useState(false);

  const {
    cards,
    cardList,
    animals,
    score,
    onClickCard,
    isVictory,
    username,
    resetGame,
    setUsername,
    isChanging,
  } = useGame();

  const [playMusic] = useSound('/sounds/Wholesome.mp3', {
    volume: isMuted ? 0 : 0.1,
    interrupt: false,
  });

  useEffect(() => {
    playMusic();
  }, [playMusic]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.username;
    if (value) {
      setUsername(value);
    }
  };

  return (
    <main className='w-full h-screen flex flex-col justify-center items-center m-auto max-w-7xl gap-4 xl:px-8 p-4'>
      <CongratulationModal
        show={isVictory}
        username={username}
        onClick={resetGame}
      />
      <UserNameModal show={!username} onSubmit={handleSubmit} />
      <div className='flex gap-2 w-full justify-between items-end'>
        <img src='/icon.png' alt='logo' className='w-40' />
        <div className='flex gap-2 items-end'>
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
      </div>
      <div
        className={cn(
          'grid grid-cols-auto-fill xl:grid-cols-6 gap-5 w-full overflow-auto select-none relative',
          {
            'pointer-events-none': isChanging,
          }
        )}
      >
        {cardList.map((card, index) => (
          <Card
            disabled={!cards[card]?.includes(index) && isChanging}
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
