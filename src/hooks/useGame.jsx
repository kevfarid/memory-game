import useSound from 'use-sound';
import { useEffect, useState } from 'react';

import { getAnimalsImages } from '../services/animals';
import { createRandomNumbers } from '../utils/random';


export default function useGame() {
  const [score, setScore] = useState({
    points: 0,
    erros: 0,
  });
  const [cards, setCards] = useState({});
  const [actualCard, setActualCard] = useState(0);

  const [cardList, setCardList] = useState([]);
  const [animals, setAnimals] = useState([]);

  const [playError] = useSound('/sounds/error.mp3');
  const [playSuccess] = useSound('/sounds/success.mp3');

  useEffect(() => {
    getAnimalsImages().then((response) => setAnimals(response));
    setCardList(createRandomNumbers(18, 2));
    setCards({});
  }, []);

  const clearCards = (actualCard) => {
    setTimeout(() => {
      setCards({
        ...cards,
        [actualCard]: [],
      });

      setScore((prev) => ({
        ...prev,
        erros: prev.erros + 1,
      }));

      setActualCard(0);
    }, 1000);
  };

  const setCard = (card, value) => {
    setCards({
      ...cards,
      [card]: value,
    });
  };

  const handleClick = (card, index) => {
    setActualCard(card);

    if (cards[card]?.includes(index)) {
      return;
    }

    if (!cards[card] || cards[card].length === 0) {
      setCard(card, [index]);
    }

    if (actualCard === 0) {
      return;
    }

    if (actualCard !== card) {
      playError();
      setCard(card, [index]);

      clearCards(actualCard);
      return;
    }

    playSuccess();
    setScore((prev) => ({
      ...prev,
      points: prev.points + 1,
    }));

    setCard(card, [...cards[card], index]);
    setActualCard(0);
  };

  return {
    cards,
    cardList,
    animals,
    score,
    onClickCard: handleClick,
  };
}
