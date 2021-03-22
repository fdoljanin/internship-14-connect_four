import { useState } from 'react';
import InitialScreen from './components/InitialScreen';
import Game from './components/Game/index';
import './App.css';

function App() {
  const [players, setPlayers] = useState(null);
  return (
    <div className="App">
      {players === null ? 
      <InitialScreen setPlayers={newPlayers => setPlayers(newPlayers)} />
        : 
      <Game players={players}/>}
    </div>
  );
}

export default App;
