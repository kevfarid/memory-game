import Card from './components/Card';
import Score from './components/Score';
import Modal from './components/Modal';

import useGame from './hooks/useGame';

function App() {
  const { cards, cardList, animals, score, onClickCard, cardsSelected } =
    useGame();

  return (
    <main className='w-full h-screen flex flex-col justify-center items-center m-auto max-w-7xl gap-4 px-8'>
      <div className='flex gap-2 w-full justify-end'>
        <Score score={score.points} name='Points' />
        <Score type='errors' score={score.erros} name='Errors' />
      </div>
      <div className='grid grid-cols-auto-fill xl:grid-cols-6 gap-5 w-full overflow-auto relative'>
        {cardsSelected.length === 2 && (
          <Modal>
            <Card image={animals[cardsSelected[0] - 1]} isForward />
            <span className='text-6xl font-bold'>-</span>
            <Card image={animals[cardsSelected[1] - 1]} isForward />
          </Modal>
        )}
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
