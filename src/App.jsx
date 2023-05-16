import { useState } from 'react'
import Game from './components/Game'
import './App.css';

const App = () => {

  const [isStart, setIsStart] = useState(false);

  const handleStart = (e) => {
    setIsStart(!isStart);
  };

  return (
    <div className="App">
      <header className="App-header">

        <button className='btn-5' onClick={handleStart}>
          {isStart ? `Stop`: `Start`}
        </button>
      </header>
      <Game isStart={isStart} />
    </div>
  );
}

export default App;
