import {createContext, useContext, useState} from 'react';

const GameContext = createContext();

export function GameProvider({ children }) {
    const holesCount = 9;
    const [isPlaying, setIsPlaying] = useState(false);
    const [score, setScore] = useState(0);
    const [moleIndex, setMoleIndex] = useState(
        Math.floor(Math.random() * holesCount)
    );

    function startGame() {
        setScore(0);
        setMoleIndex(Math.floor(Math.random() * holesCount));
        setIsPlaying(true);
    }

    function startGame() {
        setScore(0);
        setMoleIndex(Math.floor(Math.random() * holesCount));
        setIsPlaying(true);
    }

    function restartGame() {
        setIsPlaying(false);
    }

    function whackMole() {
        setScore(prev => prev + 1);
        setMoleIndex(Math.floor(Math.random() * holesCount));

    }

    return (
        <GameContext.Provider
            value={{
                isPlaying,
                score,
                moleIndex,
                startGame,
                restartGame,
                whackMole
            }}

            >
            {children}
          </GameContext.Provider>
        );
      }
      
      // custom hook to consume context
      export function useGame() {
        return useContext(GameContext);
      }