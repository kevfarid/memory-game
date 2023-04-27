import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import cn from 'classnames';

import Card from './components/Card';
import Score from './components/Score';

import useGame from './hooks/useGame';
import CongratulationModal from './components/CongratulationModal';
import UserNameModal from './components/UserNameModal';
import VolumeButton from './components/VolumeButton';

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
    <main className='w-screen h-screen lg:justify-center flex flex-col m-auto max-w-7xl gap-4 xl:px-8 p-4'>
      <CongratulationModal
        show={isVictory}
        username={username}
        onClick={resetGame}
      />
      <UserNameModal show={!username} onSubmit={handleSubmit} />
      <div className='flex gap-2 w-full justify-center sm:justify-between items-end flex-wrap'>
        <img src='/icon.png' alt='logo' className='w-40' />
        <div className='flex gap-2 items-end'>
          <VolumeButton
            isMuted={isMuted}
            setVolume={() => setIsMuted(!isMuted)}
          />
          <Score score={score.points} name='Points' />
          <Score type='errors' score={score.erros} name='Errors' />
        </div>
      </div>
      <div
        className={cn(
          'grid sm:grid-cols-6 grid-cols-3 sm:gap-5 gap-2 w-full overflow-auto select-none relative grid-rows-auto-fill-sm sm:grid-rows-auto-fill h-full lg:h-fit',
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
