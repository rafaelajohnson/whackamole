import React from 'react';
import { useGame } from '../context/GameContext.jsx';
import Hole from './Hole.jsx';

export default function GameBoard() {
  const { holesCount, score, restartGame } = useGame();
  return (
    <div className="game-board">
      <header>
        <h2>Score: {score}</h2>
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
