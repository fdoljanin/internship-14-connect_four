import './App.css';
import InitialScreen from './components/InitialScreen/index';
import Game from './components/Game/index';
import { useState } from 'react';

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
