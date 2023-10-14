import './App.css'
import { useState, useEffect } from 'react'
import AnimalBoard from './AnimalBoard';
import animals from './animalData'

function App() {

  return (
    <div className="App">
        <AnimalBoard animals={animals} />
    </div>
  );
}

export default App;
