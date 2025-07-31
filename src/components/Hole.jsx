import React from "react";
import { useGame } from "../context/GameContext.jsx";

export default function Hole ({ index }) {
    const { moleIndex, whackMole } = useGame();
    const hasMole = index === moleIndex;

    function handleClick() {
        if (hasMole) {
            whackMole();
        }
    }

    return (
        <div className="hole" onClick={handleClick}>
      {hasMole && <div className="mole" />}
    </div>
  );
}
