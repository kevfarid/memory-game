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
  const [isVictory, setIsVictory] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [username, setUsername] = useState(
    localStorage.getItem('username') || ''
  );

  const [cardList, setCardList] = useState([]);
  const [animals, setAnimals] = useState([]);

  const [playError] = useSound('/sounds/error.mp3');
  const [playSuccess] = useSound('/sounds/success.mp3');
  const [playVictory] = useSound('/sounds/win.mp3', {
    volume: 0.3,
  });

  useEffect(() => {
    getAnimalsImages().then((response) => setAnimals(response));
    setCardList(createRandomNumbers(18, 2));
  }, []);

  useEffect(() => {
    if (score.points === 9) {
      setIsVictory(true);
      playVictory();
    }
  }, [playVictory, score]);

  const resetGame = () => {
    setScore({
      points: 0,
      erros: 0,
    });
    setCards({});
    setActualCard(0);
    setIsVictory(false);
  };

  const changeUsername = (value) => {
    setUsername(value);
    localStorage.setItem('username', value);
  };

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
      setIsChanging(false);
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

    setIsChanging(true);

    if (!cards[card] || cards[card].length === 0) {
      setCard(card, [index]);
    }

    if (actualCard === 0) {
      setIsChanging(false);
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

    setIsChanging(false);
    setCard(card, [...cards[card], index]);
    setActualCard(0);
  };

  return {
    cards,
    cardList,
    animals,
    score,
    isVictory,
    username,
    setUsername: changeUsername,
    onClickCard: handleClick,
    resetGame,
    isChanging,
  };
}
