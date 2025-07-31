import { useGame } from './context/GameContext.jsx';
import Welcome from './components/Welcome.jsx';
import GameBoard from './components/GameBoard.jsx';

export default function App() {
  const { isPlaying } = useGame();
  return isPlaying ? <GameBoard /> : <Welcome />;
}