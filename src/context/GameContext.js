import { createContext, useState, useContext } from 'react';
import initialCards from '../cards-data';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState();
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);

  return (
    <GameContext.Provider
      value={{
        from,
        setFrom,
        selectedCard,
        setSelectedCard,
        to,
        setTo,
        deck,
        setDeck,
        playerOneHand,
        setPlayerOneHand,
        playerTwoHand,
        setPlayerTwoHand,
        playerThreeHand,
        setPlayerThreeHand,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('Using useGameContext outside of GameProvider');
  }
  return context;
};

export { GameProvider, useGameContext };
