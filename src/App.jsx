import './App.css';
import React, { useState } from 'react';
import animalData from './data.json';
import Card from './components/Card';

function App() {
  const [animals, setAnimals] = useState(animalData);
  const handleSortByLife = () => {
    setAnimals([...animals].sort((a,b) => a.lifeExpectancy - b.lifeExpectancy));
  };
  const onlyDogs = () => {
    setAnimals(animals.filter(animal => animal.description.includes("dog")))
  };
  return (
    <div className="App">
      <h1>Adopt me plz 🐾</h1>
      <button className="action-btn" onClick={handleSortByLife}>Sort By Life</button>
      <button className="action-btn" onClick={onlyDogs}>Only dogs</button>
      {animals.map(elem => {
        return <Card key={elem._id} animal={elem}/>
      })}
    </div>
  );
}

export default App;
