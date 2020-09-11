import React from 'react';
import './App.css';
import './TopBar'
import TopBar from './TopBar';
import Afterbar from './AfterBar'

function App() {
  return (
    <div className="App">
      <div className='Overlay'>
      <header className="App-header">
      <TopBar></TopBar>
      </header>
      
      </div>
      
    </div>
    );
}

export default App;
