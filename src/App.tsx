import React from 'react';
import './App.css';
import MouseCursor from './components/MouseCursor';
import GhostCasper from './components/GhostCasper';

function App() {
  return (
    <div className="App">
      <MouseCursor render={(mouse) => <GhostCasper mouse={mouse} />} />
    </div>
  );
}

export default App;
