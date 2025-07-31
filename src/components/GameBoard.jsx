// src/components/GameBoard.jsx
import React from 'react';
import { useGame } from '../context/GameContext.jsx';
import Hole from './Hole.jsx';

export default function GameBoard() {
  const {
    holesCount,
    score,
    timeLeft,    // pull in the timer
    restartGame,
  } = useGame();

  return (
    <div className="game-board">
      <header>
        <h2>Score: {score}</h2>
        <h2>Time: {timeLeft}s</h2>   {/* display seconds */}
        <button onClick={restartGame}>Restart</button>
      </header>

      <div className="holes-grid">
        {Array.from({ length: holesCount }).map((_, idx) => (
          <Hole key={idx} index={idx} />
        ))}
      </div>
    </div>
  );
}
