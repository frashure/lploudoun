import React from 'react';
import logo from './images/lp_logo_small.png';
import lplcLogo from './images/lplc.png';
import './App.css';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lplcLogo} className="App-logo" alt="logo" />
        <p>
          Coming soon!
        </p>
      </header>
    <Signup />
    </div>
  );
}

export default App;
