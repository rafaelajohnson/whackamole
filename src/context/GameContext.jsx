// src/context/GameContext.jsx
import {
    createContext,
    useContext,
    useState,
    useRef,
    useEffect,
  } from 'react';
  
  const GameContext = createContext();
  
  export function GameProvider({ children }) {
    const holesCount = 9;
    const [isPlaying, setIsPlaying] = useState(false);
    const [score, setScore] = useState(0);
    const [moleIndex, setMoleIndex] = useState(
      Math.floor(Math.random() * holesCount)
    );
  
    // new timer state + ref
    const [timeLeft, setTimeLeft] = useState(15);
    const timerRef = useRef(null);
  
    function startGame() {
      // reset score & mole
      setScore(0);
      setMoleIndex(Math.floor(Math.random() * holesCount));
  
      // reset & start timer
      setTimeLeft(15);
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
  
      setIsPlaying(true);
    }
  
    function restartGame() {
      setIsPlaying(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  
    // cleanup on unmount
    useEffect(() => {
      return () => clearInterval(timerRef.current);
    }, []);
  
    function whackMole() {
      // only count clicks while timer > 0
      if (timeLeft <= 0) return;
      setScore((prev) => prev + 1);
      setMoleIndex(Math.floor(Math.random() * holesCount));
    }
  
    return (
      <GameContext.Provider
        value={{
          isPlaying,
          score,
          moleIndex,
          holesCount,
          timeLeft,         // expose the timer
          startGame,
          restartGame,
          whackMole,
        }}
      >
        {children}
      </GameContext.Provider>
    );
  }
  
  export function useGame() {
    return useContext(GameContext);
  }
  