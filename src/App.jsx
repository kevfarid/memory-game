import { useEffect, useState } from 'react';

import Card from './components/Card';
import { getAnimalsImages } from './services/animals';
import { createRandomNumbers} from './utils/random';

function App() {
  const [points, setPoints] = useState(0);
  const [cardList, setCardList] = useState([]);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getAnimalsImages().then((response) => setAnimals(response));
    setCardList(createRandomNumbers(18, 2));
  }, []);

  return (
    <main className='bg-red-400 w-full h-full flex flex-col justify-center items-center m-auto max-w-7xl'>
      <span className='text-4xl font-bold text-white mb-5'>
        Points: {points}
      </span>
      <div className='grid grid-cols-auto-fill xl:grid-cols-6 gap-5 w-full px-8'>
        {cardList.map((card, index) => (
          <Card
            key={`card-${index}`}
            image={animals[card - 1]}
            onClick={() => setPoints((prev) => prev + 1)}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
