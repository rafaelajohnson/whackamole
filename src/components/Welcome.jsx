import React from "react";
import { useGame } from "../context/GameContext.jsx";

export default function Welcome() {
    const { startGame } = useGame();

    return (
        <div className="welcome">
            <h1>Welcome to Whack-a-Mole!</h1>
            <p>Click "Play" to start whacking!</p>
            <button onClick={startGame}>Play</button>
        </div>
    );
    }
    